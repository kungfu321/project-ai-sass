import { useUser } from "@clerk/nextjs";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserMessageProps {
  children: React.ReactNode;
}

const UserMessage: React.FC<UserMessageProps> = ({ children }) => {
  const { user } = useUser();

  return (
    <div className="border p-4 pb-10 rounded-lg mr-20 relative">
      {children}
      <div className="bg-secondary w-14 h-14 rounded-lg flex justify-center items-center absolute -bottom-6 left-6">
        <Avatar>
          <AvatarImage src={user?.imageUrl} />
          <AvatarFallback>BF</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default UserMessage;
