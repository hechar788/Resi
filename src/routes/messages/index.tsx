import { createFileRoute } from "@tanstack/react-router"
import { MessageCircle } from "lucide-react"

import { BottomNav } from "@/components/navigation/BottomNav"

export const Route = createFileRoute("/messages/")({
  component: MessagesPage,
})

/**
 * Placeholder messages page.
 * TODO: Implement messages page content
 */
function MessagesPage() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <div className="flex flex-col items-center justify-center flex-1 p-4 text-center">
        <MessageCircle className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold mb-2">Messages</h1>
        <p className="text-muted-foreground max-w-md">
          Messages coming soon. Chat with merchants and support.
        </p>
        {/* TODO: Implement messages page
            - Conversation list
            - Unread message badges
            - Direct messaging with merchants
            - Support chat
            - Order-related communications
            - Real-time message updates
        */}
      </div>
      <BottomNav />
    </div>
  )
}
