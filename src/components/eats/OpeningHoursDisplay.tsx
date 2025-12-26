import { useState } from "react"
import { ChevronDown, Clock } from "lucide-react"

import { cn } from "@/lib/utils"

import type { OpeningHours } from "@/data/merchants/types"

interface OpeningHoursDisplayProps {
  hours: OpeningHours
  expanded?: boolean
}

/**
 * Displays merchant opening hours with expandable weekly schedule.
 * Shows today's hours by default, with option to view full week.
 */
export function OpeningHoursDisplay({
  hours,
  expanded = false,
}: OpeningHoursDisplayProps) {
  const [isExpanded, setIsExpanded] = useState(expanded)
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" }) as keyof OpeningHours
  const todayHours = hours[today]

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-sm hover:underline"
      >
        <Clock className="h-4 w-4" />
        <span className="font-medium">
          {todayHours.isOpen
            ? `Open today: ${todayHours.open} - ${todayHours.close}`
            : "Closed today"}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      {isExpanded && (
        <div className="pl-6 space-y-1 text-sm text-muted-foreground">
          {(Object.keys(hours) as Array<keyof OpeningHours>).map((day) => {
            const dayHours = hours[day]
            return (
              <div
                key={day}
                className={cn(
                  "flex justify-between",
                  day === today && "font-medium text-foreground"
                )}
              >
                <span>{day}</span>
                <span>
                  {dayHours.isOpen
                    ? `${dayHours.open} - ${dayHours.close}`
                    : "Closed"}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
