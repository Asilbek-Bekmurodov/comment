// import React from "react";
// // import { useStateStorage } from "./hooks/use-local-storage";
// type Mode = "dark" | "light";
// interface GreetingProps {
//   initialName?: string;
//   initialMode?: Mode;
// }

// const Greeting: React.FC<GreetingProps> = ({ initialName, initialMode }) => {
//   const [name, setName] = useStateStorage("name", initialName!);
//   const [mode, setMode] = useStateStorage("mode", initialMode!);

//   return (
//     <div className='container'>
//       <div className={`bg-${mode} my-3 p-3`}>
//         <div className='form-group'>
//           <label htmlFor='name' className='text'>
//             Your name
//           </label>
//           <input
//             type='text'
//             id='name'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className='form-control'
//             placeholder='Enter name'
//           />
//         </div>
//       </div>
//       <div className='badge bg-dark text-light badge-lg'>
//         {name ? `🙋‍♂️ Hi ${name}` : "🙅‍♂️ not entered"}
//       </div>
//       <button
//         className={`btn btn-${mode === "dark" ? "primary" : "warning"}`}
//         onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
//         Toggle Mode
//       </button>
//     </div>
//   );
// };

// const Hooks: React.FC = () => (
//   <>
//     <Greeting initialName='Muhammaddiyor' />
//   </>
// );

// export default Hooks;
