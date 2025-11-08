import { CheckIcon, ClockIcon } from "lucide-react"

import {
  Queue,
  QueueItem,
  QueueItemContent,
  QueueItemDescription,
  QueueItemIndicator,
  QueueList,
  QueueSection,
  QueueSectionContent,
  QueueSectionLabel,
  QueueSectionTrigger,
} from "@/registry/v1/ai-elements/queue"

export default function QueueDemo() {
  return (
    <div className="w-full max-w-md">
      <Queue>
        <QueueSection>
          <QueueSectionTrigger>
            <QueueSectionLabel
              count={2}
              label="Completed"
              icon={<CheckIcon className="size-4" />}
            />
          </QueueSectionTrigger>
          <QueueSectionContent>
            <QueueList>
              <QueueItem>
                <div className="flex items-start gap-2">
                  <QueueItemIndicator completed />
                  <QueueItemContent completed>
                    Analyze user requirements
                  </QueueItemContent>
                </div>
                <QueueItemDescription completed>
                  Reviewed and documented all feature requests
                </QueueItemDescription>
              </QueueItem>
              <QueueItem>
                <div className="flex items-start gap-2">
                  <QueueItemIndicator completed />
                  <QueueItemContent completed>
                    Create project structure
                  </QueueItemContent>
                </div>
              </QueueItem>
            </QueueList>
          </QueueSectionContent>
        </QueueSection>

        <QueueSection>
          <QueueSectionTrigger>
            <QueueSectionLabel
              count={3}
              label="Pending"
              icon={<ClockIcon className="size-4" />}
            />
          </QueueSectionTrigger>
          <QueueSectionContent>
            <QueueList>
              <QueueItem>
                <div className="flex items-start gap-2">
                  <QueueItemIndicator />
                  <QueueItemContent>Implement authentication</QueueItemContent>
                </div>
              </QueueItem>
              <QueueItem>
                <div className="flex items-start gap-2">
                  <QueueItemIndicator />
                  <QueueItemContent>Design database schema</QueueItemContent>
                </div>
              </QueueItem>
              <QueueItem>
                <div className="flex items-start gap-2">
                  <QueueItemIndicator />
                  <QueueItemContent>Set up API routes</QueueItemContent>
                </div>
              </QueueItem>
            </QueueList>
          </QueueSectionContent>
        </QueueSection>
      </Queue>
    </div>
  )
}
