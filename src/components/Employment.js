import React from "react";
import EmploymentCard from "./EmploymentCard";
import { useAllEmployer } from "../hooks/use-all-employer";
import { StaticImage } from "gatsby-plugin-image";

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
            <StaticImage
                src="../images/timeline.png"
                alt="timeline graphic "
                placeholder="blurred"
                layout="fixed"
                className="hidden z-10 absolute lg:flex lg:justify-center lg:items-center "
            />
            <div className="grid grid-cols-2 w-8/12 gap-8">
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