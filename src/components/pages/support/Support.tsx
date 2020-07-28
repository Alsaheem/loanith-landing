import React, { Component } from "react";
import { Input, Button, Collapse } from "antd";
import "./Support.css";

interface Props {}
interface State {}

const { TextArea } = Input;
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Support = () => {
  return (
    <div>
      <div className="banner-support">
        {/* <img src="./assets/contact.png" height={200} width={'100%'}loading="lazy"/> */}
      </div>
      <div className="header--wrapper-leaders">
        <p className="header--wrapper--text-leaders">
          Frequently Asked Questions
        </p>
      </div>
      <div className="leader--position">
        <div className="leader--position--child">
          <div className="leader--position--child-content">
            <div style={{ border: "none", textAlign: "left" }}>
              <Collapse accordion>
                <Panel header="APPLICATION AND ACCOUNT INFORMATION" key="1">
                  <Collapse accordion>
                    <Panel
                      header="THow is Loanith Different from a Credit and Debit Card?"
                      key="1"
                    >
                      <p>
                        Loanith allows you to borrow money from loan investors,
                        with the agreement you will pay a percentage of interest
                        on any outstanding debt at the end of each billing
                        cycle. However, with Loanith credit account, you do not
                        need a card with maintenance fees to use this money. All
                        you need is a smartphone, the Loanith App, and a
                        complete profile.
                        <br />A debit card pulls money directly from an
                        associated bank account. Unlike Loanith Credit Account
                        and Credit Cards, you generally cannot build a credit
                        history using debit cards.
                      </p>
                    </Panel>
                    <Panel
                      header="What information does Loanith require when I apply for a Credit Account?"
                      key="2"
                    >
                      <p>
                        Applying for a Loanith Credit Account is a simple,
                        straightforward process that requires some basic
                        information. You will need a smartphone and the Loanith
                        App to provide basic personal information and create a
                        credit account such as:
                      </p>
                      <ul>
                        <li>Phone Number</li>
                        <li>Date of Birth</li>
                        <li>Bank Verification Number (BVN)</li>
                        <li>Full Name</li>
                        <li>Physical address (No P.O. Boxes)</li>
                        <li>Estimated gross annual income</li>
                        <li>Checking and/or savings account information</li>
                      </ul>
                    </Panel>
                    <Panel
                      header="Must I have a good credit history to open a Loanith Credit Account?"
                      key="3"
                    >
                      <p>
                        No! Loanith has a credit offer for everyone aged 18 and
                        above. We want to help you build a credit history with a
                        great credit score.
                      </p>
                    </Panel>
                    <Panel
                      header="Can I add an authorized user to my Account?"
                      key="3"
                    >
                      <p>
                        No please. We are however looking towards making such
                        feature available soon.
                      </p>
                    </Panel>
                    <Panel
                      header="How can I find out the status of my Loanith Account Application?"
                      key="3"
                    >
                      <p>
                        Your account is opened instantly once we can
                        authenticate your Phone Number, Age and BVN. However,
                        you will not be able to access credit until you complete
                        your profile information. You should get a notification
                        on credit approval or decline within 24hrs of submitting
                        a complete profile information.
                      </p>
                    </Panel>
                    <Panel
                      header="How soon can I start using credit from Loanith?"
                      key="7"
                    >
                      <p>
                        If you account is approved, you will receive a
                        notification in-app and via email of your Loanith
                        Account ID, and credit limit information which can be
                        used immediately
                      </p>
                    </Panel>
                    <Panel
                      header="What should I do if my Loanith Account Application has been declined?"
                      key="3"
                    >
                      <p>
                        If you have been notified that you were declined for a
                        Loanith credit account, we want to make sure we help you
                        understand why. We would always brief you in-app and via
                        email of reasons for decline and what you can do to
                        improve your chances of approval subsequently.
                      </p>
                    </Panel>
                  </Collapse>
                </Panel>

                <Panel header="ABOUT ACCOUNT USAGE AND DEFAULT" key="2">
                  <Collapse accordion>
                    <Panel
                      header="How does Loanith Credit Account Work?"
                      key="1"
                    >
                      <p>
                        Loanith allows you to borrow money from loan investors,
                        with the agreement you will pay a percentage of interest
                        on any outstanding debt at the end of each billing
                        cycle. However, with Loanith credit account, you do not
                        need a card with maintenance fees to use this money. All
                        you need is a smartphone, the Loanith App, and a
                        complete profile.
                        <br />A debit card pulls money directly from an
                        associated bank account. Unlike Loanith Credit Account
                        and Credit Cards, you generally cannot build a credit
                        history using debit cards.
                      </p>
                    </Panel>
                    <Panel
                      header="Where can I use my Loanith Credit Account?"
                      key="2"
                    >
                      <p>
                        Applying for a Loanith Credit Account is a simple,
                        straightforward process that requires some basic
                        information. You will need a smartphone and the Loanith
                        App to provide basic personal information and create a
                        credit account such as:
                      </p>
                      <ul>
                        <li>Phone Number</li>
                        <li>Date of Birth</li>
                        <li>Bank Verification Number (BVN)</li>
                        <li>Full Name</li>
                        <li>Physical address (No P.O. Boxes)</li>
                        <li>Estimated gross annual income</li>
                        <li>Checking and/or savings account information</li>
                      </ul>
                    </Panel>
                    <Panel
                      header="How do I see my statement of account?"
                      key="3"
                    >
                      <p>
                        No! Loanith has a credit offer for everyone aged 18 and
                        above. We want to help you build a credit history with a
                        great credit score.
                      </p>
                    </Panel>
                    <Panel header="When do I settle my credit bills?" key="4">
                      <p>
                        A credit bill is an outstanding balance on you Loanith
                        Credit Account. This is equal to the amount you have
                        spent from your credit limit plus applicable fees and
                        interest rates. You are expected to repay your credit
                        bills before the payment due date you have provided, and
                        not later than seven days after your preferred repayment
                        date. Doing this will help improve your credit score and
                        keep your credit bills interest free. While completing
                        your Loanith Account Profile, you should provide a debit
                        card to enable us to initiate a standing order using
                        direct debit on your bank account. You can also use the
                        “Pay Now” feature under “Account” to pay up your credit
                        bills.
                      </p>
                    </Panel>
                    <Panel
                      header="
                    Is my Loanith Credit Account Interest Free?"
                      key="5"
                    >
                      <p>
                        Yes, as much as you pay up your credit bill before the
                        expiration of your interest free period. An interest
                        free period expires 11:59pm on the 28th day of every
                        month, or on the last day of your grace period. If you
                        cannot pay the outstanding balance on your credit bill
                        before the expiration of your interest free period,
                        endeavor to pay back as much of your outstanding balance
                        as possible so as to reduce the interest you will pay on
                        outstanding balance after the due date.
                      </p>
                    </Panel>
                    <Panel
                      header="How much am I expected to settle monthly?"
                      key="6"
                    >
                      <p>
                        Minimum monthly repayment is 10% of your credit limit.
                        Excess repayment amount will be applied as a Statement
                        Credit on your account.
                      </p>
                    </Panel>
                    <Panel
                      header="  Are there consequences for missed repayments or paying less than the Minimum Monthly Repayment? "
                      key="7"
                    >
                      <p>
                        Yes! A late payment fee will apply. Should you miss two
                        (2) consecutive billing circles after your grace period
                        has expired, your account will be locked.
                      </p>
                    </Panel>
                    <Panel
                      header=" How can I unlock my account following two (2) consecutive misses of billing circles?"
                      key="8"
                    >
                      <p>
                        Use the “Pay Now” feature in Account to pay Minimum
                        Unlock Payment or Contact us via email:
                        support@loanith.com or call +2347031231728 to unlock
                        your account. The following applies for Minimum Unlock
                        Payments:
                      </p>
                    </Panel>
                    <Panel header="If unlock request date is" key="8">
                      <p>
                        less than or equal to 28days after account was locked,
                        Pay 25% of outstanding bill More than 30day but less
                        than or equal to 56days, Pay 50% of outstanding bill
                        More than 56days but less than 112days, Pay 75% of
                        outstanding bill More than 112days, Pay 100% of
                        outstanding bill Outstanding bills include credit bills
                        plus accrued interests and other processing fees.
                      </p>
                    </Panel>
                    <Panel
                      header="Is there an expiry date to my account?"
                      key="9"
                    >
                      <p>
                        No! you can use your account for as often and long as
                        you have the authorized access into the account.
                      </p>
                    </Panel>
                    <Panel
                      header=" What are common reason’s my account got declined or locked?"
                      key="10"
                    >
                      <p>
                        Your account may get declined for the below reason: Bad
                        Credit history on existing loans High Debt Burden Ratio
                        -DBR; (where DBR geater than 30%) Low credit limit
                        (where Annual Credit limit less than N30,000) Low income
                        (where Monthly Net Income is less than N30,000) However,
                        this may be reviewed in the future in line with
                        Loanith’s underwriting criteria and credit policy`.
                      </p>
                    </Panel>
                  </Collapse>
                </Panel>

                <Panel
                  header="ABOUT PRIME RATE AND ANNUAL PERCENTAGE RATES (APR)"
                  key="3"
                >
                  <Collapse accordion>
                    <Panel header="What is the Prime Rate?" key="1">
                      <p>
                        The Prime Rate is a benchmark interest rate used by most
                        financial institution to set rates on consumer loan
                        products. The Prime Rate is based upon, and generally
                        changes with, the Central Bank’s Monetary Policy Rate.
                        If your credit account or any other loan has a variable
                        APR based on the Prime Rate, whenever the Prime Rate
                        changes, the variable APR on your account will likely
                        change with it.
                      </p>
                    </Panel>
                    <Panel
                      header="What is the current APR for my account?"
                      key="2"
                    >
                      <p>
                        To find the current APR for your account, sign in to the
                        Loanith App and check the “Home” and/or “Account”
                        section.
                      </p>
                    </Panel>
                    <Panel
                      header="How do you calculate my variable APR?"
                      key="3"
                    >
                      We calculate a variable APR by adding a margin to the
                      Central Bank Money Policy Rate. The margin is dependent on
                      your credit score, account type, and transaction type.
                      Please check your account details for more information.
                    </Panel>

                    <Panel
                      header="How will I know if my account is affected by a Prime Rate change?"
                      key="6"
                    >
                      <p>
                        If your account has a variable APR based on the Central
                        Bank Money Policy Rate, please refer to your “account”
                        for the date of when these changes take effect.
                      </p>
                    </Panel>
                    <Panel header="Will my APR ever go back down?" key="5">
                      <p>
                        If the Central Bank lower the Money Policy Rate, both
                        the Prime Rate and your credit account’s APR are likely
                        to go down as well.
                      </p>
                    </Panel>
                    <Panel
                      header="How can I reduce the amount of interest that I pay?"
                      key="7"
                    >
                      <p>
                        Doing the following can help you minimize interest
                        charges: If possible, pay your balance in full to avoid
                        interest charges. Making on-time payments of more than
                        your minimum payment each month will reduce the overall
                        amount of interest you pay.
                      </p>
                    </Panel>
                    <Panel
                      header="How will a Prime Rate change affect my minimum payment?"
                      key="8"
                    >
                      <p>
                        Your minimum payment includes billed interest charges.
                        So, if the Prime Rate changes, your variable APR
                        changes, and by extension your interest charges and your
                        minimum payment may also change with it.
                      </p>
                    </Panel>
                    <Panel
                      header="Why does my APR go up despite making timely payment?"
                      key="9"
                    >
                      <p>
                        There are few reasons your Annual Percentage Rate can go
                        up even if you are up to date on all payments. These
                        include a drop in your credit score, the end of a
                        sweepstake or promotion, a change in the Money Policy
                        Rate, or if you have made late payments.
                      </p>
                    </Panel>
                    <Panel header="How do I lower my interest rates?" key="10">
                      <p>
                        Please feel free to contact us and ask for a lower
                        interest rate. Depending on your current standing credit
                        history, we may be able to approve a lower rate.
                      </p>
                    </Panel>

                    <Panel
                      header="What information does Loanith require when I apply for a Credit Account?"
                      key="2"
                    >
                      <p>
                        Applying for a Loanith Credit Account is a simple,
                        straightforward process that requires some basic
                        information. You will need a smartphone and the Loanith
                        App to provide basic personal information and create a
                        credit account such as:
                      </p>
                      <ul>
                        <li>Phone Number</li>
                        <li>Date of Birth</li>
                        <li>Bank Verification Number (BVN)</li>
                        <li>Full Name</li>
                        <li>Physical address (No P.O. Boxes)</li>
                        <li>Estimated gross annual income</li>
                        <li>Checking and/or savings account information</li>
                      </ul>
                    </Panel>
                    <Panel
                      header="Must I have a good credit history to open a Loanith Credit Account?"
                      key="3"
                    >
                      <p>
                        No! Loanith has a credit offer for everyone aged 18 and
                        above. We want to help you build a credit history with a
                        great credit score.
                      </p>
                    </Panel>
                  </Collapse>
                </Panel>

                <Panel
                  header="ABOUT CASH BACK, LEADERBOARD AND REWARDS"
                  key="4"
                >
                  <Collapse accordion>
                    <Panel
                      header="THow is Loanith Different from a Credit and Debit Card?"
                      key="1"
                    >
                      <p>
                        Loanith allows you to borrow money from loan investors,
                        with the agreement you will pay a percentage of interest
                        on any outstanding debt at the end of each billing
                        cycle. However, with Loanith credit account, you do not
                        need a card with maintenance fees to use this money. All
                        you need is a smartphone, the Loanith App, and a
                        complete profile.
                        <br />A debit card pulls money directly from an
                        associated bank account. Unlike Loanith Credit Account
                        and Credit Cards, you generally cannot build a credit
                        history using debit cards.
                      </p>
                    </Panel>
                    <Panel
                      header="What information does Loanith require when I apply for a Credit Account?"
                      key="2"
                    >
                      <p>
                        Applying for a Loanith Credit Account is a simple,
                        straightforward process that requires some basic
                        information. You will need a smartphone and the Loanith
                        App to provide basic personal information and create a
                        credit account such as:
                      </p>
                      <ul>
                        <li>Phone Number</li>
                        <li>Date of Birth</li>
                        <li>Bank Verification Number (BVN)</li>
                        <li>Full Name</li>
                        <li>Physical address (No P.O. Boxes)</li>
                        <li>Estimated gross annual income</li>
                        <li>Checking and/or savings account information</li>
                      </ul>
                    </Panel>
                    <Panel
                      header="Must I have a good credit history to open a Loanith Credit Account?"
                      key="3"
                    >
                      <p>
                        No! Loanith has a credit offer for everyone aged 18 and
                        above. We want to help you build a credit history with a
                        great credit score.
                      </p>
                    </Panel>
                  </Collapse>
                </Panel>

                <Panel header="This is panel header 5" key="5">
                  <Collapse accordion>
                    <Panel
                      header="THow is Loanith Different from a Credit and Debit Card?"
                      key="1"
                    >
                      <p>
                        Loanith allows you to borrow money from loan investors,
                        with the agreement you will pay a percentage of interest
                        on any outstanding debt at the end of each billing
                        cycle. However, with Loanith credit account, you do not
                        need a card with maintenance fees to use this money. All
                        you need is a smartphone, the Loanith App, and a
                        complete profile.
                        <br />A debit card pulls money directly from an
                        associated bank account. Unlike Loanith Credit Account
                        and Credit Cards, you generally cannot build a credit
                        history using debit cards.
                      </p>
                    </Panel>
                    <Panel
                      header="What information does Loanith require when I apply for a Credit Account?"
                      key="2"
                    >
                      <p>
                        Applying for a Loanith Credit Account is a simple,
                        straightforward process that requires some basic
                        information. You will need a smartphone and the Loanith
                        App to provide basic personal information and create a
                        credit account such as:
                      </p>
                      <ul>
                        <li>Phone Number</li>
                        <li>Date of Birth</li>
                        <li>Bank Verification Number (BVN)</li>
                        <li>Full Name</li>
                        <li>Physical address (No P.O. Boxes)</li>
                        <li>Estimated gross annual income</li>
                        <li>Checking and/or savings account information</li>
                      </ul>
                    </Panel>
                    <Panel
                      header="Must I have a good credit history to open a Loanith Credit Account?"
                      key="3"
                    >
                      <p>
                        No! Loanith has a credit offer for everyone aged 18 and
                        above. We want to help you build a credit history with a
                        great credit score.
                      </p>
                    </Panel>
                  </Collapse>
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
      <div className="header--wrapper-leaders">
        <p className="header--wrapper--text-leaders">
          Still Have a Question? Ask support
        </p>
      </div>
      <div className="leader--position">
        <div className="leader--position--child">
          <div className="leader--position--child-content">
            <div>
              <div>
                <Input placeholder="Name in full" allowClear />
                <br />
                <br />
                <Input placeholder="Enter email " allowClear />
                <br />
                <br />
                <TextArea placeholder="textarea with clear icon" allowClear />
                <br />
                <br />
                <Button type="primary" className="color-primary">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
