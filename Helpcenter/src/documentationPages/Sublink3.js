import React from 'react'
import logo from '../assets/screenshot.png'

const Sublink3 = () => {
  return (
    <div className='m-5 flex flex-col gap-5  font-medium text-gray-700 text-sm w-3/4'>
      <h1 className='text-2xl font-bold'>Getting started with Azure Functions</h1>
      <div className='bullet_point flex flex-col gap-2'>
        <span className='text-lg'>In this article</span>
        <div className=''>
          < a href='https/'><li className='text-lime-800   hover:text-lime-500/25'>Create your first function</li></ a>
          < a href='https/'><li className='text-lime-800    hover:text-lime-500/25'>Review end-to-end samples</li></ a>
          < a href='https/'><li className='text-lime-800    hover:text-lime-500/25'>Explore an interactive tutorial</li></ a>
          < a href='https/'><li className='text-lime-800    hover:text-lime-500/25'>Next Steps</li></ a>
        </div>

      </div>
      <div className='flex justify-center items-center m-2'>
        <p >

        Azure Functions allows you to implement your system's logic as event-driven, readily available blocks of code. These code blocks are called "functions". This article is to help you find your way to the most helpful Azure Functions content as quickly as possible. For more general information about Azure Functions, see the Introduction to Azure Functions.

Make sure to choose your preferred development language at the top of the article.
        </p>
      </div>
      <div>
        <img src={logo} alt='ss' />
      </div>
      <div className='flex flex-col gap-2'>
        <div>
          <li className='text-lg font-medium text-lime-800'>Create your first function</li>
          <p>
          Complete one of our quickstart articles to create and deploy your first functions in less than five minutes.

You can create C# functions by using one of the following tools:

Visual Studio
Visual Studio Code
Command line
          </p>
        </div>
        <div>
          <li className='text-lg font-medium text-lime-800'>Review end-to-end samples</li>
          <p>
          The following sites let you browse existing C# functions reference projects and samples:

Azure Samples Browser
Azure Community Library
          </p>
        </div>
        <div>
          <li className='text-lg font-medium text-lime-800'>Explore an interactive tutorial</li>
          <p>
          Complete one of the following interactive training modules to learn more about Functions:

Choose the best Azure serverless technology for your business scenario
Well-Architected Framework - Performance efficiency
Execute an Azure Function with triggers
To learn even more, see the full listing of interactive tutorials.
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

export default Sublink3