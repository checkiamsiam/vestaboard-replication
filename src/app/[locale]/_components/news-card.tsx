import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { Play } from "lucide-react";
import Image from "next/image";

interface NewsCardProps {
  image: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  href: string;
  hasVideo?: boolean;
  tag?: string;
}

export function NewsCard({ image, title, author, href, hasVideo = false, tag }: NewsCardProps) {
  return (
    <Link href={href}>
      <Card className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-secondary p-0 shadow-2xl transition-shadow hover:shadow-3xl">
        <div className="relative aspect-[16/10]">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          {hasVideo && (
            <div className="absolute right-4 top-4 rounded-full bg-black/50 p-2">
              <Play className="h-4 w-4 text-foreground" />
            </div>
          )}
          {tag && (
            <div className="absolute left-4 top-4 rounded bg-black px-2 py-1">
              <span className="text-xs font-medium text-foreground">{tag}</span>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col justify-between p-8">
          <h3 className="my-8 text-xl font-normal leading-tight text-gray-600">{title}</h3>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={author.avatar} />
              <AvatarFallback>{author.name.slice(0, 1)}</AvatarFallback>
            </Avatar>

            <span className="font-normal text-grey-darker">{author.name}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
