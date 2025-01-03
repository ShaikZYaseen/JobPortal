import React, { useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from '../ui/button';
import { DeleteIcon, LucideDelete, Trash } from 'lucide-react';
import { number } from 'zod';
import { toast } from 'sonner';

function ResumeMakerForm({ data, setData }) {

  const [skill,setSkill] = useState("");

  const form = useForm({
    defaultValues: data,
  });

  const handleAddEducation = () => {
    if(data.education.length > 2){
      toast.error("You can only add maximum of three fields");
      return;
    }
    setData((prev) => ({
      ...prev,
      education: [...(prev.education || []), { schoolName: "", schoolGrade: "", schoolPlace: "" ,schoolEndYear:   null}],
    }));
  };

  const handleAddSkill = () => {
  
    setData((prev) => ({
      ...prev,
      skills: [...(prev.skills || []),skill],
    }));
    setSkill("");
  };

  const handleDeleteSkill = (index)=>{
    setData((prev)=>({
      ...prev,
      skills: prev.skills.filter((_,i)=> i !== index)
    }))
  }
   
  const handleDeleteEducation = (index) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };


  const handleAddProject = () => {
    if (data.projects.length > 2) {
      toast.error("You can only add a maximum of three projects");
      return;
    }
    setData((prev) => ({
      ...prev,
      projects: [
        ...(prev.projects || []),
        { title: "", description: "", bulletPoints: [""] },
      ],
    }));
  };
  
  const handleAddBulletPoint = (projectIndex) => {
    setData((prev) => {
      const updatedProjects = [...prev.projects];
      updatedProjects[projectIndex].bulletPoints.push("");
      return { ...prev, projects: updatedProjects };
    });
  };
  
  const handleDeleteBulletPoint = (projectIndex, bulletIndex) => {
    setData((prev) => {
      const updatedProjects = [...prev.projects];
      updatedProjects[projectIndex].bulletPoints = updatedProjects[
        projectIndex
      ].bulletPoints.filter((_, i) => i !== bulletIndex);
      return { ...prev, projects: updatedProjects };
    });
  };
  
  const handleDeleteProject = (index) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };
  

  const handleSubmit = (formData) => {
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="p-5 flex-col justify-center items-center h-[35rem] overflow-y-auto border border-gray-300">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <h1 className="font-bold">Your Details:</h1>

          {['name', 'role', 'github', 'phone', 'leetcode', 'portfolio', 'linkedin'].map((fieldName, idx) => (
            <FormField
              key={idx}
              control={form.control}
              name={fieldName}
              render={() => (
                <FormItem>
                  <FormLabel>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`Enter your ${fieldName}..`}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, [fieldName]: e.target.value }))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <h1 className="font-bold">Education Details:</h1>
          <Button onClick={handleAddEducation} className="mt-3 mr-3">Add Education</Button>
          {data.education?.map((ele, index) => (
            <div key={index} className="border-[1px] p-3">
         <span className='flex justify-end' onClick={()=>handleDeleteEducation(index)}><Trash className='w-4 h-4 cursor-pointer'/></span>
              <FormField
                control={form.control}
                name={`education[${index}].schoolName`}
                render={() => (
                  <FormItem>
                    <FormLabel>Institution Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your institution name"
                        value={ele.schoolName}
                        onChange={(e) => {
                          const updatedEducation = [...data.education];
                          updatedEducation[index].schoolName = e.target.value;
                          setData((prev) => ({ ...prev, education: updatedEducation }));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`education[${index}].schoolGrade`}
                render={() => (
                  <FormItem>
                    <FormLabel>Grade</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your grade"
                        value={ele.schoolGrade}
                        onChange={(e) => {
                          const updatedEducation = [...data.education];
                          updatedEducation[index].schoolGrade = e.target.value;
                          setData((prev) => ({ ...prev, education: updatedEducation }));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`education[${index}].schoolPlace`}
                render={() => (
                  <FormItem>
                    <FormLabel>Place</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your place"
                        value={ele.schoolPlace}
                        onChange={(e) => {
                          const updatedEducation = [...data.education];
                          updatedEducation[index].schoolPlace = e.target.value;
                          setData((prev) => ({ ...prev, education: updatedEducation }));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name={`education[${index}].schoolEndYear`}
                render={() => (
                  <FormItem>
                    <FormLabel>End of Year</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter end of academic year"
                        type={number}
                        value={ele.schoolEndYear}
                        onChange={(e) => {
                          const updatedEducation = [...data.education];
                          updatedEducation[index].schoolEndYear = e.target.value;
                          setData((prev) => ({ ...prev, education: updatedEducation }));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}

<h1 className="font-bold">Skills:</h1>
<div className="skills-container">
  {data?.skills.map((ele, index) => (
    <div className="skill-box flex justify-between items-center space-x-2 border p-2 rounded mb-2  mr-2">
      <div className="skill-text text-sm max-w-[200px] truncate">{ele}</div>
      <div
        className="flex justify-end cursor-pointer"
        onClick={() => handleDeleteSkill(index)}
      >
        <Trash className="w-4 h-4" />
      </div>
    </div>
  ))}
</div>


  <div className='border p-3 rounded'>
  <span>
    <FormField  
      control={form.control}
      name="Skill"
      render={() => (
        <FormItem>
          <FormControl>
            <Input
              placeholder="Enter your skill"
              value={skill}
              onChange={(e) =>
               setSkill(e.target.value)
              }
              className="w-1/4" 
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </span>
  <Button className="mt-3" onClick={handleAddSkill}>Add skill</Button>

  
</div>

<div>
<h1 className="font-bold">Projects:</h1>
<Button onClick={handleAddProject} className="mt-3 mr-3">Add Project</Button>
{data.projects?.map((project, projectIndex) => (
  <div key={projectIndex} className="border-[1px] p-3 mb-3 rounded">
    <span
      className="flex justify-end cursor-pointer"
      onClick={() => handleDeleteProject(projectIndex)}
    >
      <Trash className="w-4 h-4" />
    </span>

    {/* Project Title */}
    <FormField
      control={form.control}
      name={`projects[${projectIndex}].title`}
      render={() => (
        <FormItem>
          <FormLabel>Project Title</FormLabel>
          <FormControl>
            <Input
              placeholder="Enter project title"
              value={project.title}
              onChange={(e) => {
                const updatedProjects = [...data.projects];
                updatedProjects[projectIndex].title = e.target.value;
                setData((prev) => ({ ...prev, projects: updatedProjects }));
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    {/* Bullet Points */}
    <div className=''>
      <h2 className="font-medium">Content:</h2>
      {project.bulletPoints.map((bullet, bulletIndex) => (
        <div key={bulletIndex} className="flex items-center mt-2 space-x-2">
          <Input
            placeholder="Enter your content"
            value={bullet}
            onChange={(e) => {
              const updatedProjects = [...data.projects];
              updatedProjects[projectIndex].bulletPoints[bulletIndex] =
                e.target.value;
              setData((prev) => ({ ...prev, projects: updatedProjects }));
            }}
            className="flex-1"
          />
          <Trash
            className="w-4 h-4 cursor-pointer"
            onClick={() => handleDeleteBulletPoint(projectIndex, bulletIndex)}
          />
        </div>
      ))}
      <Button
        onClick={() => handleAddBulletPoint(projectIndex)}
        className="mt-2"
      >
        Add Content
      </Button>
    </div>
  </div>
))}

</div>

          <Button type="submit" className="mt-3">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default ResumeMakerForm;
