import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DollarSign, Lock, Users } from "lucide-react"

export function Tokenomics() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 py-8 gap-4">
      <Card className="shadow-lg hover:scale-105">
        <CardHeader>
          <Users className="h-8 w-8" />
          <CardTitle>Community Take Over</CardTitle>
          <CardDescription>The community controls this token. We make decisions together and win together!</CardDescription>
        </CardHeader>
      </Card>
      <Card className="shadow-lg hover:scale-105">
        <CardHeader>
          <Lock className="h-8 w-8" />
          <CardTitle>Liquidity Locked</CardTitle>
          <CardDescription>Ensuring stability and trust, our liquidity is securely locked, protecting against market volatility and providing a solid foundation for sustainable growth.</CardDescription>
        </CardHeader>
      </Card>
      <Card className="shadow-lg hover:scale-105">
        <CardHeader>
          <DollarSign className="h-8 w-8" />
          <CardTitle>1 Billion Tokens</CardTitle>
          <CardDescription>Capped supply of 1 billion tokens!</CardDescription>
        </CardHeader>
      </Card>

    </div>
  );
}
