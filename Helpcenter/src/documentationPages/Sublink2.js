import React from 'react'
import logo from '../assets/screenshot.png'

const Sublink2 = () => {
  return (
    <div className='m-5 flex flex-col gap-5  font-medium text-gray-700 text-sm w-3/4'>
      <h1 className='text-2xl font-bold'>Azure Functions scenarios</h1>
      <div className='bullet_point flex flex-col gap-2'>
        <span className='text-lg'>In this article</span>
        <div className=''>
          < a href='https/'><li className='text-lime-800   hover:text-lime-500/25'>Process file uploads</li></ a>
          < a href='https/'><li className='text-lime-800    hover:text-lime-500/25'>Real-time stream and event processing</li></ a>
          < a href='https/'><li className='text-lime-800    hover:text-lime-500/25'>Machine learning and AI</li></ a>
          < a href='https/'><li className='text-lime-800    hover:text-lime-500/25'>Run scheduled tasks</li></ a>
        </div>

      </div>
      <div className='flex justify-center items-center m-2'>
        <p >

        We often build systems to react to a series of critical events. Whether you're building a web API, responding to database changes, processing event streams or messages, Azure Functions can be used to implement them.

In many cases, a function integrates with an array of cloud services to provide feature-rich implementations. The following are a common (but by no means exhaustive) set of scenarios for Azure Functions.

Select your development language at the top of the article.
        </p>
      </div>
      <div>
        <img src={logo} alt='ss' />
      </div>
      <div className='flex flex-col gap-2'>
        <div>
          <li className='text-lg font-medium text-lime-800'>Process file uploads</li>
          <p>
          There are several ways to use functions to process files into or out of a blob storage container. To learn more about options for triggering on a blob container, see Working with blobs in the best practices documentation.

For example, in a retail solution, a partner system can submit product catalog information as files into blob storage. You can use a blob triggered function to validate, transform, and process the files into the main system as they're uploaded.
          </p>
        </div>
        <div>
          <li className='text-lg font-medium text-lime-800'>Real-time stream and event processing</li>
          <p>
          So much telemetry is generated and collected from cloud applications, IoT devices, and networking devices. Azure Functions can process that data in near real-time as the hot path, then store it in Azure Cosmos DB for use in an analytics dashboard.

Your functions can also use low-latency event triggers, like Event Grid, and real-time outputs like SignalR to process data in near-real-time.
          </p>
        </div>
        <div>
          <li className='text-lg font-medium text-lime-800'>Machine learning and AI</li>
          <p>
          Functions enables you to run your code based on a cron schedule that you define.

Check out how to Create a function in the Azure portal that runs on a schedule.

A financial services customer database, for example, might be analyzed for duplicate entries every 15 minutes to avoid multiple communications going out to the same
          </p>
        </div>
        <div>
          <li className='text-lg font-medium text-lime-800'>Run scheduled tasks</li>
          <p>
            If you want complete control over your functions runtime environment and dependencies, you can even deploy your functions in containers that you can fully customize. Your custom containers can be hosted by Functions, deployed as part of a microservices architecture in Azure Container Apps, or even self-hosted in Kubernetes.
          </p>
        </div>


      </div>
    </div>
  )
}

export default Sublink2