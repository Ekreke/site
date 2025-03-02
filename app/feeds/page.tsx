import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Feeds() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-6">Feeds</h1>
        <p className="text-xl text-gray-600 mb-12">Stay updated with the latest content from various sources.</p>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <FeedItem
                  key={i}
                  title={`Feed Item ${i}`}
                  source={i % 2 === 0 ? "Technology Today" : "Design Weekly"}
                  date={`March ${i + 5}, 2024`}
                  excerpt="This is a sample feed item with a brief description of the content."
                  category={i % 2 === 0 ? "Technology" : "Design"}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technology">
            <div className="grid gap-6">
              {[2, 4].map((i) => (
                <FeedItem
                  key={i}
                  title={`Technology Feed ${i}`}
                  source="Technology Today"
                  date={`March ${i + 5}, 2024`}
                  excerpt="This is a technology-related feed item with the latest tech news and updates."
                  category="Technology"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="design">
            <div className="grid gap-6">
              {[1, 3, 5].map((i) => (
                <FeedItem
                  key={i}
                  title={`Design Feed ${i}`}
                  source="Design Weekly"
                  date={`March ${i + 5}, 2024`}
                  excerpt="This is a design-related feed item covering UI/UX trends and inspiration."
                  category="Design"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function FeedItem({
  title,
  source,
  date,
  excerpt,
  category,
}: {
  title: string
  source: string
  date: string
  excerpt: string
  category: string
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">{source}</span>
            <span className="text-sm text-gray-400">{date}</span>
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{excerpt}</p>
          <div className="pt-2">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                category === "Technology" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
              }`}
            >
              {category}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

