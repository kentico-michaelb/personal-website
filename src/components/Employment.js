import React from "react";
import EmploymentCard from "./EmploymentCard";
import { useAllEmployer } from "../hooks/use-all-employer";

export default function Employment(){
    const allKontentItemEmployer  = useAllEmployer()

    const employment = allKontentItemEmployer.nodes.map(emp => (emp.elements))
    const companies = employment.map(emp => {
        const job = {
            company: emp.company.value[0],
            positions: emp.positions
        }
        return job
    })

    return (
        <div className="flex justify-center mt-4">
            <div className="grid grid-cols-2 w-8/12">
                <h2 className="text-4xl text-custom-dark-gray uppercase">Employment</h2>
                <h2 className="text-4xl text-custom-dark-gray uppercase">Skills in Position</h2>
                <div className="col-span-2">
                    {companies && 
                        companies.map(emp => {
                            return (
                                <EmploymentCard 
                                    company={emp.company} 
                                    positions={emp.positions}
                                    key={emp.company.system.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}