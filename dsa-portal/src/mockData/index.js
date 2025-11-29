// Mock Data for the DSA Analytics Portal

export const currentUser = {
  name: "Alex Coder",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  rank: 42,
  totalSolved: 345,
  accuracy: 78.5,
  streak: 12,
  xp: 15400,
};

export const rewards = [
  {
    id: 1,
    title: "Premium Theme Pack",
    description: "Unlock exclusive dark themes and color schemes for your dashboard",
    xpCost: 500,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    category: "Cosmetic"
  },
  {
    id: 2,
    title: "Code Mentor Session",
    description: "1-hour one-on-one mentoring session with a senior developer",
    xpCost: 2000,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    category: "Learning"
  },
  {
    id: 3,
    title: "Certificate Badge",
    description: "Display a verified achievement badge on your profile",
    xpCost: 750,
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop",
    category: "Achievement"
  },
  {
    id: 4,
    title: "Priority Support",
    description: "Get priority support for 1 month with faster response times",
    xpCost: 1200,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    category: "Service"
  },
  {
    id: 5,
    title: "Custom Avatar Frame",
    description: "Unlock animated frames and borders for your profile picture",
    xpCost: 600,
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=300&fit=crop",
    category: "Cosmetic"
  },
  {
    id: 6,
    title: "Problem Unlocks (10)",
    description: "Get access to 10 premium interview questions",
    xpCost: 1500,
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&h=300&fit=crop",
    category: "Content"
  }
];

export const stats = {
  dailyGoal: 5,
  solvedToday: 3,
  weakTopics: ["Dynamic Programming", "Graphs", "Bit Manipulation"],
  strongTopics: ["Arrays", "Strings", "Hash Maps"],
  totalQuestions: 1200,
};

export const recentActivity = [
  { date: "2023-10-25", count: 5 },
  { date: "2023-10-26", count: 8 },
  { date: "2023-10-27", count: 2 },
  { date: "2023-10-28", count: 10 },
  { date: "2023-10-29", count: 4 },
  { date: "2023-10-30", count: 7 },
  { date: "2023-10-31", count: 3 },
];

export const leaderboardData = [
  { rank: 1, name: "Sarah J.", score: 2500, solved: 500, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
  { rank: 2, name: "Mike T.", score: 2450, solved: 490, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" },
  { rank: 3, name: "Emma W.", score: 2300, solved: 460, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma" },
  { rank: 4, name: "James L.", score: 2100, solved: 420, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James" },
  { rank: 5, name: "You", score: 1540, solved: 345, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", isCurrentUser: true },
];

export const recommendedQuestions = [
  { id: 1, title: "Merge K Sorted Lists", difficulty: "Hard", topic: "Heap", acceptance: "45%" },
  { id: 2, title: "Longest Palindromic Substring", difficulty: "Medium", topic: "DP", acceptance: "32%" },
  { id: 3, title: "Valid Parentheses", difficulty: "Easy", topic: "Stack", acceptance: "80%" },
];

export const topics = [
  { name: "Arrays", progress: 85, total: 150 },
  { name: "DP", progress: 30, total: 120 },
  { name: "Graphs", progress: 45, total: 100 },
  { name: "Trees", progress: 60, total: 110 },
];
