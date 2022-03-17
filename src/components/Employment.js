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
        <div>
            <div>
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
    )
}