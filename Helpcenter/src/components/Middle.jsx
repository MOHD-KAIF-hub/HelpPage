import React from 'react'
import BankDetailsForm from './Middlepart'


const BankDetails = () => {
    return (
        <>
            <div className="flex flex-col ml-6 gap-2 items-start ">
                <div className="text-3xl  font-medium text-[#262626]">
             How do I create and manage resources in azure?
                </div>
                <div className="text-sm font-['Open_Sans'] w-full">
             Azure provides a variety of tools to create and manage the Azure resources used by your application.
                </div>
            </div>


            <BankDetailsForm />

            <div className="flex flex-col mr-3 gap-6 h-16 shrink-0 items-end">
                <div className="text-left  font-['Open_Sans'] text-[#262626] w-full">
                Different tools are designed to support different use cases, and most Azure developers use a combination of different tools depending on the job they need to perform. For example, you might:

<h4 className='text-l font-bold my-1'>. Use a GUI tool like the Azure portal or the Azure Tools extension for VS Code </h4>when prototyping Azure resources for a new application.
 GUI tools guide you through the process of creating new services and let you review and select the options for a service using drop-down menus and other graphical elements.

 <h4 className='text-l font-bold my-1'>. Write a script using the Azure CLI or Azure PowerShell</h4> to automate a common task. For example, you might create a script that creates a basic dev environment for a new web application consisting of an Azure App Service, a database, and blob storage. Writing a script ensures the resources are created the same way each time and is faster to run than clicking through a UI.

 <h4 className='text-l font-bold my-1'>. Use Infrastructure as Code (IaC) tools to declaratively deploy and manage Azure resources.</h4> Tools like Terraform, Ansible, or Bicep allow you to codify the Azure resources needed for a solution in declarative syntax, ensuring the consistent deployment of Azure resources across environments and preventing environmental drift.
                </div>

            </div>
        </>
    )
}

export default BankDetails