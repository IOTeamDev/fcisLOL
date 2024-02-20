"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createVideo } from "../lib/db/videos/createVideo";
import { useRouter } from "next/navigation";

interface Props {
  user: any;
  subjectId: any;
  setShowModal: any;
}

const VideoForm = ({ user, subjectId, setShowModal }: Props) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const videoData = {
      ...data,
      user: user.id,
      subject: subjectId,
    };
    try {
      await createVideo(videoData, user.rule);
    } catch (error) {
      toast.error("An error has occurred, Probably invalid video URL");
      throw error;
    }
    toast.success("Video added and is waiting for approval! 🎉");
    setShowModal(false);
    setTimeout(() => {
      router.refresh();
    }, 2000);
  };
  return (
    <div className="p-5">
      <section className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit((data: any) => onSubmit(data))}
          className=" flex flex-col gap-10"
        >
          <Card className="w-full max-w-3xl">
            <CardHeader>
              <CardTitle className="p-4 text-3xl">Add Video 🎥</CardTitle>
              <CardDescription>
                🎉 Welcome to our video adding form ✨! We're excited to welcome
                you to share your content with us. Kindly complete the following
                details to upload your video: 📹
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Input
                  id="url"
                  type="url"
                  placeholder="Youtube Video URL"
                  {...register("url")}
                  required
                />
                <div className="space-y-2">
                  <Input
                    id="title"
                    placeholder="Video Title"
                    type="text"
                    {...register("title")}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Input
                  id="description"
                  placeholder="Enter Video Description (Optional)"
                  type="text"
                  {...register("description")}
                />
              </div>
            </CardContent>
            <CardFooter className="flex gap-5">
              <Button type="submit" className="w-[70px]">
                Add
              </Button>
              <Button variant="ghost" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </form>
      </section>
    </div>
  );
};

export default VideoForm;
