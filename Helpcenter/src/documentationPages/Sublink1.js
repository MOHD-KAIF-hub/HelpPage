import React from 'react'
import logo from '../assets/screenshot.png'

const Sublink1 = () => {
  return (
    <div className='m-5 flex flex-col gap-5  font-medium text-gray-700 text-sm w-3/4'>
      <h1 className='text-2xl font-bold'>Azure Function Overview</h1>
      <div className='bullet_point flex flex-col gap-2'>
        <span className='text-lg'>In this article</span>
        <div className=''>
          < a href='https/'><li className='text-lime-800   hover:text-lime-500/25'>Scenarios</li></ a>
          < a href='https/'><li className='text-lime-800    hover:text-lime-500/25'>Development lifecycle</li></ a>
          < a href='https/'><li className='text-lime-800    hover:text-lime-500/25'>Hosting options</li></ a>
          < a href='https/'><li className='text-lime-800    hover:text-lime-500/25'>Next Steps</li></ a>
        </div>

      </div>
      <div className='flex justify-center items-center m-2'>
        <p >

          Azure Functions is a serverless solution that allows you to write less code, maintain less infrastructure, and save on costs. Instead of worrying about deploying and maintaining servers, the cloud infrastructure provides all the up-to-date resources needed to keep your applications running.

          You focus on the code that matters most to you, in the most productive language for you, and Azure Functions handles the rest.

          For the best experience with the Functions documentation, choose your preferred development language from the list of native Functions languages at the top of the article.
        </p>
      </div>
      <div>
        <img src={logo} alt='ss' />
      </div>
      <div className='flex flex-col gap-2'>
        <div>
          <li className='text-lg font-medium text-lime-800'>Scenarios</li>
          <p>
            Functions provides a comprehensive set of event-driven triggers and bindings that connect your functions to other services without having to write extra code.

            The following are a common, but by no means exhaustive, set of integrated scenarios that feature Functions.
          </p>
        </div>
        <div>
          <li className='text-lg font-medium text-lime-800'>Development lifecycle</li>
          <p>
            With Functions, you write your function code in your preferred language using your favorite development tools and then deploy your code to the Azure cloud. Functions provides native support for developing in C#, Java, JavaScript, PowerShell, Python, plus the ability to use more languages, such as Rust and Go.

            Functions integrates directly with Visual Studio, Visual Studio Code, Maven, and other popular development tools to enable seamless debugging and deployments.

            Functions also integrates with Azure Monitor and Azure Application Insights to provide comprehensive runtime telemetry and analysis of your functions in the cloud.
          </p>
        </div>
        <div>
          <li className='text-lg font-medium text-lime-800'>Hosting options</li>
          <p>
            Functions provides a variety hosting options for your business needs and application workload. Event-driven scaling hosting options range from fully serverless, where you only pay for execution time (Consumption plan), to always warm instances kept ready for fastest response times (Premium plan).
          </p>
        </div>
        <div>
          <li className='text-lg font-medium text-lime-800'>Next Steps</li>
          <p>
            If you want complete control over your functions runtime environment and dependencies, you can even deploy your functions in containers that you can fully customize. Your custom containers can be hosted by Functions, deployed as part of a microservices architecture in Azure Container Apps, or even self-hosted in Kubernetes.
          </p>
        </div>


      </div>
    </div>
  )
}

export default Sublink1