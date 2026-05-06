// pages/SkillWizard.tsx
import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  HelpCircle,
  ChevronRight,
  Check,
  Minus,
  Plus,
} from "lucide-react";
import type { PageType } from "../App";

interface SkillWizardProps {
  onNavigate: (page: PageType) => void;
}

type PostType = "offer" | "request" | null;

interface FormData {
  type: PostType;
  title: string;
  category: string;
  description: string;
  credits: number;
}

const categories = [
  "Programming",
  "Academics",
  "Design",
  "Languages",
  "Music",
  "Writing",
  "Business",
];

export default function SkillWizard({ onNavigate }: SkillWizardProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    type: null,
    title: "",
    category: "",
    description: "",
    credits: 20, // Default starting value
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onNavigate("home");
    }
  };

  const handleSubmit = () => {
    // In a real app, send data to backend here.
    // We'll simulate success and go home.
    alert("Successfully posted to the community feed!");
    onNavigate("home");
  };

  // Validation to disable "Next" button if step isn't complete
  const isStepValid = () => {
    if (step === 1) return formData.type !== null;
    if (step === 2)
      return (
        formData.title.trim() !== "" &&
        formData.category !== "" &&
        formData.description.trim() !== ""
      );
    return true;
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      {/* Header & Progress Bar */}
      <div className="sticky top-0 z-10 bg-slate-900">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-10 h-10 transition-colors border rounded-xl bg-slate-800 hover:bg-slate-700 border-slate-700"
          >
            <ArrowLeft size={20} className="text-slate-50" />
          </button>
          <div>
            <h1 className="heading-sm">
              {step === 1 && "What do you want to do?"}
              {step === 2 && "Add the details"}
              {step === 3 && "Set the value"}
              {step === 4 && "Review & Post"}
            </h1>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-slate-800">
          <div
            className="h-full transition-all duration-300 bg-skwap-accent"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Form Content */}
      <div className="flex-1 px-4 py-6 overflow-y-auto pb-28">
        {/* STEP 1: Choose Type */}
        {step === 1 && (
          <div className="space-y-4">
            <p className="mb-6 text-sm text-slate-400">
              Choose whether you want to teach a skill or request help from the
              community.
            </p>

            <button
              onClick={() => setFormData({ ...formData, type: "offer" })}
              className={`w-full p-6 text-left transition-all border-2 rounded-2xl ${
                formData.type === "offer"
                  ? "border-skwap-accent bg-skwap-accent/10"
                  : "border-slate-700 bg-slate-800 hover:bg-slate-700"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl ${formData.type === "offer" ? "bg-skwap-accent text-slate-900" : "bg-slate-700 text-slate-300"}`}
                >
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-50">
                    Offer a Skill
                  </h3>
                  <p className="text-sm text-slate-400">
                    Teach someone and earn credits.
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setFormData({ ...formData, type: "request" })}
              className={`w-full p-6 text-left transition-all border-2 rounded-2xl ${
                formData.type === "request"
                  ? "border-green-400 bg-green-400/10"
                  : "border-slate-700 bg-slate-800 hover:bg-slate-700"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl ${formData.type === "request" ? "bg-green-400 text-slate-900" : "bg-slate-700 text-slate-300"}`}
                >
                  <HelpCircle size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-50">
                    Request Help
                  </h3>
                  <p className="text-sm text-slate-400">
                    Spend credits to get assistance.
                  </p>
                </div>
              </div>
            </button>
          </div>
        )}

        {/* STEP 2: Details */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-300">
                Title
              </label>
              <input
                type="text"
                placeholder={
                  formData.type === "offer"
                    ? "e.g., Python & Data Processing"
                    : "e.g., Need help with React Hooks"
                }
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="input-field rounded-xl"
                maxLength={40}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-300">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFormData({ ...formData, category: cat })}
                    className={`px-4 py-2 text-sm font-semibold transition-colors rounded-xl border ${
                      formData.category === cat
                        ? "bg-skwap-accent border-skwap-accent text-slate-900"
                        : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-300">
                Description
              </label>
              <textarea
                placeholder="Give a brief overview of what you will cover or what you need help with."
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="h-32 resize-none input-field rounded-xl"
                maxLength={200}
              />
              <p className="mt-1 text-xs text-right text-slate-500">
                {formData.description.length}/200
              </p>
            </div>
          </div>
        )}

        {/* STEP 3: Credits */}
        {step === 3 && (
          <div className="flex flex-col items-center justify-center h-full py-12 space-y-8">
            <div className="text-center">
              <p className="mb-2 text-sm text-slate-400">
                {formData.type === "offer"
                  ? "How many credits will you charge?"
                  : "How many credits are you willing to pay?"}
              </p>
              <p className="text-xs text-slate-500">Average is 15-30 CR</p>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    credits: Math.max(5, prev.credits - 5),
                  }))
                }
                className="flex items-center justify-center w-12 h-12 transition-colors border rounded-xl bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300 active:scale-95"
              >
                <Minus size={24} />
              </button>

              <div className="w-32 text-center">
                <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                  {formData.credits}
                </span>
                <span className="block mt-1 font-semibold text-skwap-accent">
                  Credits
                </span>
              </div>

              <button
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    credits: prev.credits + 5,
                  }))
                }
                className="flex items-center justify-center w-12 h-12 transition-colors border rounded-xl bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300 active:scale-95"
              >
                <Plus size={24} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Review */}
        {step === 4 && (
          <div className="space-y-6">
            <p className="text-sm text-center text-slate-400">
              Here is how your post will look to others.
            </p>

            {/* Feed Card Preview - Outer 2xl */}
            <div className="card-interactive rounded-2xl">
              <div className="flex items-center gap-3">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jofether"
                  alt="Your Avatar"
                  className="flex-shrink-0 object-cover rounded-full w-14 h-14 ring-2 ring-slate-700"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate text-slate-50">
                    Jofether (You)
                  </h3>
                  <p className="mb-1 text-sm truncate text-slate-400">
                    {formData.title}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-md bg-slate-700 text-slate-300">
                      {formData.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end flex-shrink-0 gap-2">
                  <span
                    className={`text-sm font-bold ${formData.type === "offer" ? "text-slate-300" : "text-green-400"}`}
                  >
                    {formData.type === "offer" ? "" : "+"}
                    {formData.credits} CR
                  </span>
                </div>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-700">
                <p className="text-sm text-slate-400">{formData.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 border-t bg-slate-900 border-slate-800">
        <div className="flex max-w-md mx-auto">
          {step < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="flex items-center justify-center w-full py-4 text-lg font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-skwap-accent text-slate-900 rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
            >
              Continue <ChevronRight size={20} className="ml-1" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex items-center justify-center w-full py-4 text-lg font-bold transition-all bg-skwap-accent text-slate-900 rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
            >
              Publish Post <Check size={20} className="ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
