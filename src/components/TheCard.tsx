import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

const TheCard = ({ children }: { children: any }) => {
  return (
    <div>
      <Card className="border-[#020817] dark:border-white border-2">
        <CardHeader>
          <CardContent></CardContent>
          <CardTitle className="flex justify-center items-center">
            {children}
          </CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default TheCard;
