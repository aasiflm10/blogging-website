import { Test } from "./Test";

export default function ProjectsComponent(){
    return <div className="space-y-8">
        <h1>List Project</h1>
        <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6">
                <Test className="h-[330px]"/>
            </div>
            <div className="col-span-6">
                <Test className="h-[330px]"/>
            </div>
        </div>
        <div>
            <Test className="h-[556px]"/>
        </div>
        <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6">
                <Test className="h-[330px]"/>
            </div>
            <div className="col-span-6">
                <Test className="h-[330px]"/>
            </div>
        </div>
    </div>
}