interface QuestionCardProps {
  questionId: number;
  totalQuestions: number;
  questionText: string;
}

export default function QuestionCard({
  questionId,
  totalQuestions,
  questionText,
}: QuestionCardProps) {
  return (
    <div className='text-center'>
      <p className='text-sm sm:text-lg text-white font-galmuri'>
        {questionId} / {totalQuestions}
      </p>
      <h1 className='text-base sm:text-2xl text-white mt-1 sm:mt-2 font-galmuri'>
        {questionText}
      </h1>
    </div>
  );
}
