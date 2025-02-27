"use client";

import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import Template from "@/app/(data)/Template";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { chatSession } from "@/utlis/AiModal";
import { db } from "@/utlis/db";
import { AIOutput } from "@/utlis/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

interface Props {
  params: {
    templateSlug: string;
  };
}

const CreateNewContent = ({ params }: Props) => {
  const selectedTemplate: TEMPLATE | undefined = Template?.find(
    (item) => item.slug === params.templateSlug
  );

  const [loading, setLoading] = React.useState(false);
  const [aiOutput, setAIOutput] = React.useState<string>("");

  const { user } = useUser();

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt;

    const result = await chatSession.sendMessage(FinalAIPrompt);
    // console.log(FinalAIPrompt);
    setAIOutput(result?.response.text());
    await SaveInDB(formData, selectedTemplate?.slug, result?.response.text());
    setLoading(false);
  };

  const SaveInDB = async (formData: any, slug: any, aiResp: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD/MM/YYYY"),
    });
    console.log(result);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      {/* FormSection */}
      <FormSection
        selectedTemplate={selectedTemplate}
        userFormInput={(v: any) => GenerateAIContent(v)}
        loading={loading}
      />

      {/* OutputSection */}
      <div className="col-span-2">
        <OutputSection aiOutput={aiOutput} />
      </div>
    </div>
  );
};

export default CreateNewContent;
