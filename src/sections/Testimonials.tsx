import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";

const testimonials = [
  {
    name: "الکس",
    position: "مدیر مارکتینگ متا",
    text: "نممنتیس یست منتبیسمن س تمنبیست منستمنبت منتمنب تمیستمن تبت منیتمنیستمنیستس منیتبمنتب",
    avatar: memojiAvatar1,
  },
  {
    name: "اولیویا",
    position: "دیزاینر مجله فشن",
    text: "نممنتیس یست منتبیسمن س تمنبیست منستمنبت منتمنب تمیستمن تبت منیتمنیستمنیستس منیتبمنتب",
    avatar: memojiAvatar2,
  },
  {
    name: "دنیل",
    position: "سی ای او دیجیکالا",
    text: "نممنتیس یست منتبیسمن س تمنبیست منستمنبت منتمنب تمیستمن تبت منیتمنیستمنیستس منیتبمنتب",
    avatar: memojiAvatar3,
  },
  {
    name: "امیلی",
    position: "پروداکت منیجر گوگل",
    text: "نممنتیس یست منتبیسمن س تمنبیست منستمنبت منتمنب تمیستمن تبت منیتمنیستمنیستس منیتبمنتب",
    avatar: memojiAvatar4,
  },
  {
    name: "مایکل",
    position: "مدیر آی تی دیجیکالا",
    text: "نممنتیس یست منتبیسمن س تمنبیست منستمنبت منتمنب تمیستمن تبت منیتمنیستمنیستس منیتبمنتب",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="ltr container mt-24">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <p className="py-2 bg-gradient-to-r from-yellow-300 to-yellow-400 text-transparent bg-clip-text">
            نظر مشتری ها
          </p>
        </div>
        <p className="font2 text-4xl text-center">
          افراد مختلف درمورد من چی میگن؟
        </p>
        <p className="font3 py-2 max-w-xs text-center text-white/70">
          اینجا میتونید نظر افرادی که باهاشون کارکردم رو درمورد پروژه هایی که
          داشتیم ببینید.
        </p>
      </div>
      <div className="space-y-4 mt-5">
        {testimonials.map((cm) => (
          <div
            key={cm.name}
            className="bg-zinc-800 flex flex-col md:flex-row p-8 rounded-3xl overflow-hidden relative z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:outline after:rounded-3xl after:outline-white/20"
          >
            <div
              className="absolute inset-0 -z-30 opacity-5"
              style={{ backgroundImage: `url(${grainImage.src})` }}
            ></div>
            {/*  */}
            <div className="flex gap-2 items-center">
              <Image
                className="bg-zinc-700 size-16 rounded-full flex justify-center items-center"
                src={cm.avatar}
                alt={cm.name}
              />
              <div className="flex flex-col">
                <p>{cm.name}</p>
                <p className="text-white/50 font3">{cm.position}</p>
              </div>
            </div>
            <p className="font3">{cm.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
