"use client";

import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

type Props = {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
};

const FormSection = ({ selectedTemplate, userFormInput, loading }: Props) => {
  const [formData, setFormData] = useState<any>();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    // console.log(formData);
    userFormInput(formData);
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-emerald-50">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} width={50} height={50} alt="items" />
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div className="my-5 flex flex-col gap-2 mb-7">
            <label className="text-sm font-semibold text-gray-600">
              {item.label}
            </label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field == "textarea" ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading && <Loader2Icon className="animate-spin" />}
          Generate
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
