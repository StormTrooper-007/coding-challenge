import { Oval } from "react-loader-spinner"


function Spinner() {
  return (

 <Oval
  height={50}
  width={50}
  color="#4fa94d"
  wrapperStyle={{margin:"200px 200px 200px 400px"}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
  )
}

export default Spinner