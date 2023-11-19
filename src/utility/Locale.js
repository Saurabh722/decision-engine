const Locale = {
    fullApproveMsg: (amount, currency = "Rs") => `Congratulations! You are qualified for a 100% loan approval for the entire ${currency}${amount} that you have asked. To learn more, get in touch with us.`,
    sixtyPercentApproveMsg: (amount, currency = "Rs") => `And just like that! Of the requested loan amount of ${currency}${amount}, you are eligible for 60% of the requested loan amount that is ${currency}${amount * 0.6}. For further information, get in touch with us.`,
    loanDeclineMsg: (amount, currency = "Rs") => `Apologies! You are not qualified for a loan approval for the entire ${currency}${amount} that you have asked. To learn more, get in touch with us.`
}

export default Locale;