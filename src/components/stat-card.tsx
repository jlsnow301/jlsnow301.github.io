import {
  Calendar,
  CircleCheckBig,
  DollarSign,
  PieChartIcon,
} from "lucide-react";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";

const revenueData = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 2200 },
  { month: "Mar", revenue: 2700 },
  { month: "Apr", revenue: 2400 },
  { month: "May", revenue: 2800 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
];

const salesData = [
  { month: "Jan", sales: 120 },
  { month: "Feb", sales: 140 },
  { month: "Mar", sales: 180 },
  { month: "Apr", sales: 160 },
  { month: "May", sales: 200 },
  { month: "Jun", sales: 220 },
  { month: "Jul", sales: 240 },
];

const revenueSourcesData = [
  { name: "Product Sales", value: 45, color: "#4ade80" },
  { name: "Services", value: 30, color: "#3b82f6" },
  { name: "Subscriptions", value: 15, color: "#f472b6" },
  { name: "Partnerships", value: 10, color: "#facc15" },
];

export function DashboardStatCards() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-bold text-gray-800 text-xl dark:text-gray-100">
            Revenue
          </CardTitle>
          <DollarSign className="h-5 w-5 text-gray-800 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="mb-2 font-bold text-3xl text-gray-800 dark:text-gray-100">
            $23,500
          </div>
          <p className="text-gray-400 text-sm">+20.1% from last month</p>
          <ChartContainer
            config={{
              revenue: {
                label: "Revenue",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="mt-4 h-[200px] w-full"
          >
            <LineChart data={revenueData}>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#4ade80"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-bold text-gray-800 text-xl dark:text-gray-100">
            Monthly Sales
          </CardTitle>
          <Calendar className="h-5 w-5 text-gray-800 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="mb-2 font-bold text-3xl text-gray-800 dark:text-gray-100">
            1,260
          </div>
          <p className="text-gray-400 text-sm">+8.1% from last month</p>
          <ChartContainer
            config={{
              sales: {
                label: "Sales",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="mt-4 h-[200px] w-full"
          >
            <BarChart data={salesData}>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="sales" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-bold text-gray-800 text-xl dark:text-gray-100">
            Task Completion
          </CardTitle>
          <CircleCheckBig className="h-5 w-5 text-gray-800 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="mb-2 font-bold text-3xl text-gray-800 dark:text-gray-100">
            85%
          </div>
          <p className="text-gray-400 text-sm">+12% from last month</p>
          <Progress
            value={85}
            className="mt-4 h-4 bg-gray-300 dark:bg-gray-700"
          />
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-gray-500 text-sm dark:text-gray-400">
                Completed
              </p>
              <p className="font-bold text-gray-600 text-lg dark:text-gray-100">
                127
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-500 text-sm dark:text-gray-400">
                In Progress
              </p>
              <p className="font-bold text-gray-600 text-lg dark:text-gray-100">
                22
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-bold text-gray-800 text-xl dark:text-gray-100">
            Revenue Sources
          </CardTitle>
          <PieChartIcon className="h-5 w-5 text-gray-800 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              sources: {
                label: "Revenue Sources",
                color: "hsl(var(--chart-4))",
              },
            }}
            className="mt-8 h-[250px] w-full"
          >
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Pie
                data={revenueSourcesData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {revenueSourcesData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  );
}
