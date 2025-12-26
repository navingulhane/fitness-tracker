"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  EggIcon,
  Apple,
  Calendar,
  CheckCircle,
  Dumbbell,
  Heart,
  Plus,
  Target,
  TrendingUp,
  Utensils,
} from "lucide-react"

const motivationalQuotes = [
  "Every workout brings you closer to your goals! 💪",
  "Small steps lead to big changes. Keep going! 🌟",
  "Your body can do it. It's your mind you need to convince! 🧠",
  "Progress, not perfection. You've got this! 🚀",
  "The hardest part is showing up. You're already winning! 🏆",
  "Believe in yourself and all that you are! ✨",
]

const beginnerWorkouts = [
  {
    name: "Morning Stretch",
    duration: "10 min",
    exercises: ["Neck rolls", "Arm circles", "Toe touches", "Cat-cow pose"],
    difficulty: "Easy",
    completed: false,
  },
  {
    name: "Basic Cardio",
    duration: "15 min",
    exercises: ["Marching in place", "Arm swings", "Knee lifts", "Side steps"],
    difficulty: "Easy",
    completed: true,
  },
  {
    name: "Strength Basics",
    duration: "20 min",
    exercises: ["Wall push-ups", "Chair squats", "Standing calf raises", "Arm raises"],
    difficulty: "Beginner",
    completed: false,
  },
]

const indianMealPlans = [
  {
    meal: "Breakfast",
    options: ["Oats upma with vegetables", "Moong dal chilla with mint chutney", "Poha with peanuts and curry leaves"],
    calories: "300-400",
    logged: true,
  },
  {
    meal: "Lunch",
    options: ["Brown rice with dal and sabzi", "Roti with rajma and salad", "Quinoa pulao with raita"],
    calories: "400-500",
    logged: false,
  },
  {
    meal: "Dinner",
    options: ["Vegetable soup with whole wheat toast", "Grilled paneer with roti", "Khichdi with yogurt and pickle"],
    calories: "300-400",
    logged: false,
  },
]

export default function FitnessApp() {
  const [currentQuote, setCurrentQuote] = useState("")
  const [workouts, setWorkouts] = useState(beginnerWorkouts)
  const [meals, setMeals] = useState(indianMealPlans)
  const [activeTab, setActiveTab] = useState("dashboard")

  useEffect(() => {
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    setCurrentQuote(randomQuote)
  }, [])

  const toggleWorkoutComplete = (index: number) => {
    const updatedWorkouts = [...workouts]
    updatedWorkouts[index].completed = !updatedWorkouts[index].completed
    setWorkouts(updatedWorkouts)
  }

  const toggleMealLogged = (index: number) => {
    const updatedMeals = [...meals]
    updatedMeals[index].logged = !updatedMeals[index].logged
    setMeals(updatedMeals)
  }

  const completedWorkouts = workouts.filter((w) => w.completed).length
  const loggedMeals = meals.filter((m) => m.logged).length
  const workoutProgress = (completedWorkouts / workouts.length) * 100
  const mealProgress = (loggedMeals / meals.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto p-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 pt-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Fitness Tracker</h1>
          <p className="text-gray-600">Utth Utha Hill Hilla Shareer Apna hehe :)</p>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <Heart className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="workouts" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <Dumbbell className="w-4 h-4 mr-2" />
              Workouts
            </TabsTrigger>
            <TabsTrigger value="nutrition" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <Utensils className="w-4 h-4 mr-2" />
              Nutrition
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <TrendingUp className="w-4 h-4 mr-2" />
              Progress
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Motivational Quote */}
            <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h2 className="text-xl font-semibold mb-2">Daily Motivation</h2>
                <p className="text-lg opacity-90">{currentQuote}</p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <Activity className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Today's Workouts</h3>
                  <p className="text-2xl font-bold text-green-600">
                    {completedWorkouts}/{workouts.length}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <EggIcon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Meals Logged</h3>
                  <p className="text-2xl font-bold text-orange-500">
                    {loggedMeals}/{meals.length}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Weekly Goal</h3>
                  <p className="text-2xl font-bold text-blue-500">5/7</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-800">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => setActiveTab("workouts")}
                  className="bg-green-600 hover:bg-green-700 text-white h-12"
                >
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Start Workout
                </Button>
                <Button
                  onClick={() => setActiveTab("nutrition")}
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 h-12"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Log Meal
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Workouts Tab */}
          <TabsContent value="workouts" className="space-y-4">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-800 flex items-center">
                  <Dumbbell className="w-5 h-5 mr-2 text-green-600" />
                  Beginner Workouts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {workouts.map((workout, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      workout.completed
                        ? "bg-green-50 border-green-200"
                        : "bg-white border-gray-200 hover:border-green-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-800">{workout.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="bg-green-100 text-green-700">
                            {workout.duration}
                          </Badge>
                          <Badge variant="outline" className="border-orange-300 text-orange-600">
                            {workout.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        onClick={() => toggleWorkoutComplete(index)}
                        variant={workout.completed ? "default" : "outline"}
                        className={
                          workout.completed
                            ? "bg-green-600 hover:bg-green-700"
                            : "border-green-600 text-green-600 hover:bg-green-50"
                        }
                      >
                        {workout.completed ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Completed
                          </>
                        ) : (
                          "Start"
                        )}
                      </Button>
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Exercises:</strong> {workout.exercises.join(", ")}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Nutrition Tab */}
          <TabsContent value="nutrition" className="space-y-4">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-800 flex items-center">
                  <Utensils className="w-5 h-5 mr-2 text-orange-500" />
                  Indian Meal Plans
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {meals.map((meal, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      meal.logged
                        ? "bg-orange-50 border-orange-200"
                        : "bg-white border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-800">{meal.meal}</h3>
                        <Badge variant="secondary" className="bg-orange-100 text-orange-700 mt-1">
                          {meal.calories} cal
                        </Badge>
                      </div>
                      <Button
                        onClick={() => toggleMealLogged(index)}
                        variant={meal.logged ? "default" : "outline"}
                        className={
                          meal.logged
                            ? "bg-orange-500 hover:bg-orange-600"
                            : "border-orange-500 text-orange-500 hover:bg-orange-50"
                        }
                      >
                        {meal.logged ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Logged
                          </>
                        ) : (
                          "Log Meal"
                        )}
                      </Button>
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Options:</strong>
                      <ul className="mt-1 ml-4">
                        {meal.options.map((option, optionIndex) => (
                          <li key={optionIndex} className="list-disc">
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-gray-800 flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-green-600" />
                    Workout Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Today's Workouts</span>
                      <span>
                        {completedWorkouts}/{workouts.length}
                      </span>
                    </div>
                    <Progress value={workoutProgress} className="h-2" />
                    <p className="text-xs text-gray-600">
                      {workoutProgress === 100
                        ? "Great job! All workouts completed!"
                        : "Keep going! You're doing great!"}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-gray-800 flex items-center">
                    <Apple className="w-5 h-5 mr-2 text-orange-500" />
                    Nutrition Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Meals Logged</span>
                      <span>
                        {loggedMeals}/{meals.length}
                      </span>
                    </div>
                    <Progress value={mealProgress} className="h-2" />
                    <p className="text-xs text-gray-600">
                      {mealProgress === 100
                        ? "Perfect! All meals logged!"
                        : "Remember to log your meals for better tracking!"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Summary */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-800 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                  Weekly Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-green-600">5</p>
                    <p className="text-sm text-gray-600">Workouts</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-500">18</p>
                    <p className="text-sm text-gray-600">Meals Logged</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-500">120</p>
                    <p className="text-sm text-gray-600">Minutes Active</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-500">7</p>
                    <p className="text-sm text-gray-600">Day Streak</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Suggestions */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-800">💡 Personalized Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Try adding 5 more minutes to your morning stretch routine
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Include more protein in your breakfast - try adding paneer to your poha
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    You're doing great with consistency! Keep up the daily routine
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
