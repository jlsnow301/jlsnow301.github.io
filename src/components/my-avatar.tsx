import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function MyAvatar() {
  return (
    <a href="#intro">
      <Avatar>
        <AvatarImage src="https://github.com/jlsnow301.png" alt="@jlsnow301" />
        <AvatarFallback>jlsnow301</AvatarFallback>
      </Avatar>
    </a>
  );
}
