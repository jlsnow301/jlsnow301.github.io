import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {
  pixels?: true;
};

export function MyAvatar(props: Props) {
  const { pixels } = props;

  return (
    <a href="#intro">
      <Avatar>
        <AvatarImage
          src={
            pixels ? "/jlsnow301_v1.png" : "https://github.com/jlsnow301.png"
          }
          alt="@jlsnow301"
        />
        <AvatarFallback>jlsnow301</AvatarFallback>
      </Avatar>
    </a>
  );
}
