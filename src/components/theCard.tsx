import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TheCard = ({ children }: { children: any }) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{children}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl">🔒</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TheCard;
