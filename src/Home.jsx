import React,{useState} from "react"
function Home(){
    const [formData, setFormData] = useState({
        height:'',
        weight:'',
        age:''
    })
    const [details, setDetails] = useState('')
  
    function onChange(e){
        setFormData((prevState)=>{
            return {
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
    }

    function calcBmi(){
        let bmi;
        let bmiRound;
        let reply=''
        if(formData.weight > 0 && formData.weight >0){
            bmiRound = Number(formData.weight)/ (Number(formData.height)*0.0187)
        }else{
            alert('Enter a postive number!!!😡')
        }
       
        bmi=bmiRound.toFixed(2)
        if(bmi < 18.5){
            reply = 'Your BMI: ${bmi},you are underweight'
        }else if(bmi >= 18.5 && bmi < 24.9 ){
            reply = `Your BMI: ${bmi}, you are normal`
        }else if(bmi >= 25 && bmi < 29.9  ){
            reply = `Your BMI: ${bmi}, you are overweight`
        }else if(bmi >= 30 && bmi < 34.9  ){
            reply = `Your BMI: ${bmi}, you are overweight`
        }else{
            reply = `Your BMI: ${bmi}, you are extremely obese`
        }
        setDetails(reply)
      
        
     }
  
    return(
        <div>
             <div className="bg-gray-500 py-4">
                <h1 className="text-center font-extrabold text-3xl text-white">BMI For 20+</h1>
            </div>
        <div className="flex flex-col lg:flex-row bg-gray-300">

           
            <div className="h-screen p-6 w-full lg:w-1/2 border border-black">
           <p className="text-center">If you have or think you might have an eating disorder, 
            we advise you not to use the BMI Calculator and 
            get further advice from your GP. </p>
            <div className="h-full flex flex-col items-center">
                <div className="flex flex-col mt-24 mb-4">
                    <label htmlFor="weight">Weight(kg)</label>
                    <input      className="w-64 border border-black  p-4 rounded-lg"
                                type="number" 
                                placeholder="Weight"
                                value={formData.weight}
                                onChange={onChange}
                                name="weight"/>
                </div>
                <div className="flex flex-col mb-6">
                    <label htmlFor="height">Height(cm)</label>                    
                    <input      className="w-64 border border-black  p-4 rounded-lg"
                                type="number"
                                placeholder="Height"
                                value={formData.height}
                                onChange={onChange}
                                name="height"/>
            
                </div>
                <button className="border bg-gray-600 w-64  p-4 rounded-lg text-white" onClick={calcBmi}>Compute BMI</button>
                <div className="bg-gray-200 w-64 p-2">
                {details}
                </div>
                </div>
            </div>


          
          
            <div className="w-full lg:w-1/2 border border-black p-6">
                <div className="text-center mt-16">
                    <h2 className="font-bold text-lg mb-4">Understanding your BMI result</h2>
                    <h3 className="font-semibold">Underweight</h3>
                    <p>
                    Being underweight could be a sign you're not eating 
                    enough or you may be ill. If you're underweight, a GP can help.
                    </p>
                    <h3 className="font-semibold">Normal</h3>
                    <p>
                    Keep up the good work! For tips on maintaining a healthy weight, 
                    check out the food and diet and fitness sections.
                    </p>
                    <h3 className="font-semibold">Overweight</h3>
                    <p>
                    The best way to lose weight if you're overweight is 
                    through a combination of diet and exercise.
                    </p>
                    <h3 className="font-semibold">Obese</h3>
                    <p>
                    The best way to lose weight if you're obese is through a 
                    combination of diet and exercise, and, in some cases, medicines. 
                    See a GP for help and advice.
                    </p>
       
                </div>
                    
            </div>
       
                
          

                       
        </div>
            
          
        <div className="bg-gray-500 py-4">
                <h1 className="text-center font-extrabold text-lg text-white"><i class="fa-solid fa-copyright"></i> 2023 Oladev</h1>
            </div>
        </div>
    )
}

export default Home