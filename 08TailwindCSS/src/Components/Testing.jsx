export default function Testing() {
    return(
      <>
        <h1 className="text-6xl font-semibold">this is H1</h1>
        <h2 className="text-4xl font-medium">this is H2</h2>
        <h3 className="text-2xl font-thin">this is H3</h3>


        <p className="font-serif ">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"</p>
        <p className="font-sans">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "</p>
        <p className="font-mono bg-blue-500 text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"</p>
        <div className=" bg-green-300 w-1/2 h-1/2 mx-16 my-10">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"</div>
        <div className="flex space-x-4">
          <div className="bg-purple-400 m-4">one</div>
          <div className="bg-purple-400 m-4">two</div>
          <div className="bg-purple-400 m-4">three</div>
        </div>

          <div className="bg-purple-400 m-4 border-2 rounded h-[50vh]">one</div>
          <div className="bg-purple-400 m-4 border-2 border-green-600 rounded sm:bg-orange-600 md: w-48">two</div>
          <div className="bg-purple-400 m-4 border-2 border-pink-700 rounded">three</div>

          {/* for not repetition of class we use @apply property to give some common properties to all the divs */}
          <div className="box">one1</div>
          <div className="box">two2</div>
          <div className="box">three3</div> 
      </>  
    )
}