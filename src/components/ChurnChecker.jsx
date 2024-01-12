import React, { useState } from "react";

import "./../style.css";
import { Button } from "./Button";
import { ProgressBar } from "./ProgressBar";

const ChurnChecker = ({ formRef }) => {
  const [churnProb, setChurnProb] = useState(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2em",
        }}
      >
        <Button
          onClick={async (e) => {
            e.preventDefault();

            try {
              const formData = new FormData(formRef.current);

              const response = await fetch("/check", {
                method: "POST",
                body: formData,
              });
              if (response.ok == true) {
                const result = await response.json();
                setChurnProb(Number.parseFloat(result["result"]));
              }
            } catch (err) {
              console.log(err);
            }
          }}
        >
          Check
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();

            const form = formRef.current;
            if (form) {
              form.reset();
            }

            window.location.reload();
          }}
        >
          Reset
        </Button>
      </div>
      <ProgressBar percentage={churnProb} />
    </>
  );
};

export default ChurnChecker;
