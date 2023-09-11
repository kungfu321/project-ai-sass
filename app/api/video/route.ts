import { auth } from "@clerk/nextjs";
import Replicate from 'replicate';
import { NextResponse } from "next/server";
import { checkSubscription, checkUserLimit, incrementUserLimit } from "@/lib/user-limit";

const configuration = {
  auth: process.env.REPLICATE_API_KEY!,
};

const replicate = new Replicate(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { prompt } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.auth) {
      return new NextResponse("Miss Replicate API Key.", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Prompt are required", { status: 400 });
    }

    const reachToLimit = await checkUserLimit();
    const isPro = await checkSubscription();

    if (!reachToLimit && !isPro) {
      return NextResponse.json({ message: "You are reach to limit. Please upgrade to higher plan.", status: 403 }, { status: 403 });
    }

    const response = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt,
        }
      }
    );

    if (!isPro) {
      await incrementUserLimit();
    }

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    
    return new NextResponse("Something went wrong.", { status: 500 });
  }
}
