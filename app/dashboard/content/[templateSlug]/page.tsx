"use client";

import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import Template from "@/app/(data)/Template";
import { TEMPLATE } from "../../_components/TemplateListSection";

interface Props {
  params: {
    templateSlug: string;
  };
}

const CreateNewContent = ({ params }: Props) => {
  console.log(params);
  const selectedTemplate: TEMPLATE | undefined = Template?.find(
    (item) => item.slug === params.templateSlug
  );

  const GenerateAIContent = (formData: any) => {};

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      {/* FormSection */}
      <FormSection
        selectedTemplate={selectedTemplate}
        userFormInput={(v: any) => GenerateAIContent(v)}
      />

      {/* OutputSection */}
      <div className="col-span-2">
        <OutputSection />
      </div>
    </div>
  );
};

export default CreateNewContent;
