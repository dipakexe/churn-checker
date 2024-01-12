import React, { useRef } from "react";
import SelectOptionInput from "./SelectOptionInput";
import ChurnChecker from "./ChurnChecker";

const ChurnCheckerForm = () => {
  const formRef = useRef(null);

  return (
    <form
      ref={formRef}
      action="/check"
      method="post"
      style={{
        width: "95%",
        maxWidth: "650px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3em 1em",
        background: "#fff",
        borderRadius: "13px",
        boxShadow: "0px 0px 3px grey",
      }}
    >
      <SelectOptionInput
        label={"Select Gender:"}
        options={["Male", "Female"]}
        name={"gender"}
        optionValueFormat={(option) => (option === "Male" ? 0 : 1)}
      />
      <SelectOptionInput
        label={"Senior Citizen:"}
        options={["Yes", "No"]}
        name={"SeniorCitizen"}
        optionValueFormat={(option) => (option === "Yes" ? 0 : 1)}
      />

      <SelectOptionInput
        label={"Relationship Status:"}
        options={["Single", "Married"]}
        name={"Partner"}
        optionValueFormat={(option) => (option === "Single" ? 0 : 1)}
      />
      <SelectOptionInput
        label={"Has Dependents:"}
        options={["Yes", "No"]}
        name={"Dependents"}
        optionValueFormat={(option) => (option === "Yes" ? 0 : 1)}
      />
      <SelectOptionInput
        label={"Has Phone Service:"}
        options={["Yes", "No"]}
        name={"PhoneService"}
        optionValueFormat={(option) => (option === "Yes" ? 0 : 1)}
      />
      <SelectOptionInput
        label={"Paperless Billing:"}
        options={["Yes", "No"]}
        optionValueFormat={(option) => (option === "Yes" ? 0 : 1)}
        name={"PaperlessBilling"}
      />
      <SelectOptionInput
        label={"Contract Period:"}
        options={["Month-to-month", "One year", "Two year"]}
        name={"Contract"}
      />
      <SelectOptionInput
        label={"Internet Service:"}
        options={["DSL", "Fiber optic", "No"]}
        name={"InternetService"}
      />

      <SelectOptionInput
        label={"Online Security:"}
        options={["Yes", "No", "No internet service"]}
        name={"OnlineSecurity"}
      />

      <SelectOptionInput
        label={"Online Backup:"}
        options={["Yes", "No", "No internet service"]}
        name={"OnlineBackup"}
      />

      <SelectOptionInput
        label={"Online Protection:"}
        options={["Yes", "No", "No internet service"]}
        name={"DeviceProtection"}
      />
      <SelectOptionInput
        label={"Tech Support:"}
        options={["Yes", "No", "No internet service"]}
        name={"TechSupport"}
      />
      <SelectOptionInput
        label={"Streaming TV:"}
        options={["Yes", "No", "No internet service"]}
        name={"StreamingTV"}
      />

      <SelectOptionInput
        label={"Streaming Movie:"}
        options={["Yes", "No", "No internet service"]}
        name={"StreamingMovies"}
      />

      <SelectOptionInput
        label={"Payment Method:"}
        options={[
          "Electronic check",
          "Mailed check",
          "Bank transfer (automatic)",
          "Credit card (automatic)",
        ]}
        name={"PaymentMethod"}
      />

      <SelectOptionInput
        label={"Tenure:"}
        options={["10", "20", "30", "40", "50", "60", "70"]}
        optionLabelFormat={(option) => `${option} Months`}
        name={"tenure"}
      />
      <SelectOptionInput
        label={"Monthly Charges:"}
        options={["10", "30", "50", "70", "90", "110"]}
        optionLabelFormat={(option) => `$ ${option}`}
        name={"MonthlyCharges"}
      />

      <SelectOptionInput
        label={"Total Charges:"}
        options={["0", "1000", "3000", "5000", "7000", "9000"]}
        optionLabelFormat={(option) => `$ ${option}`}
        name={"TotalCharges"}
      />

      <ChurnChecker formRef={formRef} />
    </form>
  );
};

export default ChurnCheckerForm;
