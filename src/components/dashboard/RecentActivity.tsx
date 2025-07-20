import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Clock, MessageSquare, Wrench, CheckCircle, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ActivityItem {
  id: string
  type: "message" | "assignment" | "completion" | "escalation"
  title: string
  description: string
  timestamp: string
  user: string
  userInitials: string
  property?: string
}

const mockActivity: ActivityItem[] = []

const activityIcons = {
  message: MessageSquare,
  assignment: Wrench,
  completion: CheckCircle,
  escalation: AlertTriangle
}

const activityColors = {
  message: "text-primary",
  assignment: "text-warning",
  completion: "text-success", 
  escalation: "text-destructive"
}

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockActivity.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No recent activity
            </div>
          ) : (
            mockActivity.map((item) => {
              const Icon = activityIcons[item.type]
              return (
                <div key={item.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2",
                    activityColors[item.type],
                    "bg-background"
                  )}>
                    <Icon className="h-4 w-4" />
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{item.title}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {item.timestamp}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-5 w-5">
                          <AvatarFallback className="text-xs">{item.userInitials}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">{item.user}</span>
                      </div>
                      
                      {item.property && (
                        <Badge variant="outline" className="text-xs ml-auto">
                          {item.property}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </CardContent>
    </Card>
  )
}