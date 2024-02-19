import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TheCard = ({ children }: { children: any }) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardContent></CardContent>
          <CardTitle className="flex justify-center items-center">{children}</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default TheCard;
