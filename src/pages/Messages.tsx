import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, Send, Search, Phone, Mail, Filter } from "lucide-react";

const conversations = [
  {
    id: 1,
    tenant: "Sarah Johnson",
    property: "Sunset Apartments",
    unit: "Apt 12A",
    lastMessage: "Thank you for fixing the faucet so quickly!",
    timestamp: "2 hours ago",
    unread: 0,
    avatar: "/placeholder.svg",
    status: "Active"
  },
  {
    id: 2,
    tenant: "Michael Chen",
    property: "Downtown Office Complex",
    unit: "Suite 205",
    lastMessage: "When can someone look at the AC issue?",
    timestamp: "1 day ago",
    unread: 2,
    avatar: "/placeholder.svg",
    status: "Urgent"
  },
  {
    id: 3,
    tenant: "Emily Rodriguez",
    property: "Riverside Condos",
    unit: "Unit 8B",
    lastMessage: "I'll be moving out at the end of the month.",
    timestamp: "3 days ago",
    unread: 1,
    avatar: "/placeholder.svg",
    status: "Notice"
  }
];

const currentMessages = [
  {
    id: 1,
    sender: "Michael Chen",
    message: "Hi, the air conditioning in Suite 205 has stopped working. It's getting quite warm in here.",
    timestamp: "Yesterday 2:30 PM",
    isOwn: false
  },
  {
    id: 2,
    sender: "Property Manager",
    message: "Hi Michael, I'm sorry to hear about the AC issue. I'll send our HVAC technician to take a look first thing tomorrow morning. Would 9 AM work for you?",
    timestamp: "Yesterday 3:15 PM",
    isOwn: true
  },
  {
    id: 3,
    sender: "Michael Chen",
    message: "That would be perfect, thank you! I'll make sure to be available.",
    timestamp: "Yesterday 3:18 PM",
    isOwn: false
  },
  {
    id: 4,
    sender: "Michael Chen",
    message: "When can someone look at the AC issue?",
    timestamp: "Today 10:30 AM",
    isOwn: false
  }
];

export default function Messages() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
        {/* Conversations List */}
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Messages</h1>
            <p className="text-muted-foreground">Communicate with tenants</p>
          </div>

          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-9" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2">
            {conversations.map((conversation) => (
              <Card key={conversation.id} className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={conversation.avatar} />
                      <AvatarFallback>{conversation.tenant.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium truncate">{conversation.tenant}</p>
                        <div className="flex items-center space-x-1">
                          {conversation.unread > 0 && (
                            <Badge variant="destructive" className="text-xs px-1.5 py-0.5">
                              {conversation.unread}
                            </Badge>
                          )}
                          <Badge variant={
                            conversation.status === "Urgent" ? "destructive" :
                            conversation.status === "Notice" ? "secondary" : "outline"
                          } className="text-xs">
                            {conversation.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{conversation.unit}, {conversation.property}</p>
                      <p className="text-sm text-muted-foreground truncate mt-1">{conversation.lastMessage}</p>
                      <p className="text-xs text-muted-foreground mt-1">{conversation.timestamp}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Message Thread */}
        <div className="lg:col-span-2 flex flex-col">
          <Card className="flex-1 flex flex-col">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Michael Chen</CardTitle>
                    <CardDescription>Suite 205, Downtown Office Complex</CardDescription>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 p-0">
              <div className="flex flex-col h-full">
                {/* Messages */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  {currentMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] ${message.isOwn ? 'order-2' : 'order-1'}`}>
                        <div
                          className={`p-3 rounded-lg ${
                            message.isOwn
                              ? 'bg-primary text-primary-foreground ml-auto'
                              : 'bg-muted'
                          }`}
                        >
                          <p className="text-sm">{message.message}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 px-1">
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Textarea
                      placeholder="Type your message..."
                      className="flex-1 min-h-[60px] resize-none"
                    />
                    <Button size="icon" className="self-end">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}