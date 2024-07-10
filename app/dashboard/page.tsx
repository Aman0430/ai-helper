"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

type Props = {};

const page = (props: Props) => {
  const [userSearchInput, setUserSearchInput] = React.useState<string>();
  return (
    <div>
      {/* search section */}
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />
      {/* template list */}
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
};

export default page;
