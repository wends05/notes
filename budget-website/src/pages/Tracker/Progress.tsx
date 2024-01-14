const Progress = ({ budget, total }: { budget: number; total: number }) => {
  const progressPercentage = ((total / budget) * 100)? ((total/budget) * 100).toFixed(2) : 0;

  return (
    <>
      <div className=" bg-slate-400 m-1 rounded-full relative h-6 overflow-hidden">
        <span
          className={`absolute  overflow-hidden top-0 left-0 bg-slate-300 rounded-full h-full`}
          style={{
            width: `${progressPercentage}%`,
          }}
        ></span>
      </div>
      <div className="text-sm">
        {progressPercentage}% of {budget}
      </div>
    </>
  );
};

export default Progress;
