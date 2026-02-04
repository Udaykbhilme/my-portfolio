export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6">
      <div className="max-w-2xl w-full border border-zinc-800 p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-md">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Uday Kumar Bhilme
        </h1>
        <p className="text-zinc-400 mt-2 font-mono">
          SGSITS, Indore • Class of 2026
        </p>
        
        <div className="mt-8 space-y-4">
          <p className="text-lg text-zinc-300">
            Full-Stack Developer & ML Enthusiast. Winner of the 
            <span className="text-cyan-400"> BhashaBandhu Hackathon</span>.
          </p>
          
          <div className="p-4 bg-black/50 rounded-lg border border-zinc-800">
            <p className="text-sm text-purple-400 font-mono italic">
              "Jinkey onground contacts strong hotey hai, unkey LinkedIn mai kabhi 250 se jyada connections nahi hotey."
            </p>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <p className="text-xs text-zinc-500 uppercase tracking-widest">
            System Live // Building in Public
          </p>
        </div>
      </div>
    </main>
  );
}