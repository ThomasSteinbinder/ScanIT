// https://www.voipshield.com/20-common-types-of-viruses-affecting-your-computer/
// https://www.ceotodaymagazine.com/2019/06/the-worst-computer-viruses-in-history/
class virus {
    constructor(id, name, description, reward, chance = 1) {
        if (this.constructor === virus) {
            throw new TypeError('Abstract class "virus" cannot be instantiated directly.');
        }

        this.id = id
        this.name = name;
        this.description = description;
        this.reward = reward;
        this.chance = chance;        
    }
}

class virus1 extends virus {
    constructor() {
        super(0,
            "ILOVEYOU",
            "From May 5th 2000 onwards, this computer worm spread itself via email with the subject line ‘ILOVEYOU’ and an attachment called ‘LOVE-LETTER-FOR-YOU.txt.vbs’. This virus spread quickly and easily as it would use a user’s mailing list to send the email on to friends and acquaintances, who would deem it and the attachment safe to open given the familiarity of its sender. Once someone’s computer was infected, it would begin to damage it and overwrite their files, often hiding them. Tens of millions of Windows PCs were affected. This virus outbreak made very clear the importance of being cautious when opening attachments in emails, even if they’re from someone you know.",
            KILO);
    }
}



class virus2 extends virus {
    constructor() {
        super(1,
            "Melissa",
            "Before ILOVEYOU, there was Melissa. This one was created on March 26th 1999 and, like ILOVEYOU, would use mass-mailing to send an infected attachment via email. Once opened, this virus would disable various safeguards in Word 97 or Word 2000 and then send itself to the first 50 addresses on the victim’s email list. Melissa was made by David L. Smith from New Jersey, and in December of 1999, David was sentenced to 10 years in prison and fined $5,000 for creating and spreading it.",
            KILO);
    }
}

class virus3 extends virus {
    constructor() {
        super(2,
            "WannaCry",
            "Now for something different, and far more recent. WannaCry, which began its life in May 2017, was especially dangerous as it would encrypt the victim’s data and demand ransom payments in the form of Bitcoin, and affected 200,000 computers across 150 countries. Thankfully, this virus was put to a stop quickly after Microsoft released emergency patches to its systems and a kill switch was discovered to prevent it from spreading any further. However, the impact was huge for this particular virus – the hacking attack cost the NHS £92 million as it infected 70,000 of its devices, including MRI scanners, computers and theatre equipment. The NHS was criticised at the time for using outdated and vulnerable IT systems, as Windows XP was 17 years old at the time. Nissan Motor Manufacturing UK was also attacked, and in 2018, an email from the alleged creators threatened those who received it to destroy their data unless 0.1 BTC was paid to the hackers’ Bitcoin address. A terrible form of ransomware, this virus really made you Wanna Cry, and consider updating your system.",
            KILO);
    }
}

class virus4 extends virus {
    constructor() {
        super(3,
            "CryptoLocker",
            "Another ransomware example, CryptoLocker lasted from September 5th 2013 until May 2014 and also spread itself as a trojan virus via email attachment. While similar in its execution, what made CryptoLocker unique and devastating was that once files were encypted after its infection, it was near impossible to have the files decrypted, leading to permanently lost data and files. Those who paid the ransom reported that often, their files remained encrypted. The success of CryptoLocker led to clones under a similar name, such as CryptoWall, Crypt0L0cker, and TorrentLocker. Since its release, ransomware attacks have become more rampant and lethal.",
            KILO);
    }
}

class virus5 extends virus {
    constructor() {
        super(4,
            "Conficker",
            "This worm, which also went by the name of Downup, Downadup and Kido, was discovered in November 2008 and was particularly difficult to remove. It used a combination of advanced malware techniques and spread in the form of 5 variants, discovered at intervals between November 21st 2008 – April 7th 2009. The virus would disable numerous of Microsoft Windows’ services, including as Automatic Updates, Windows Defender and Windows Error Reporting, as well as making antivirus websites inaccessible and often locking users out of their accounts. Conficker infected millions of computers across 190 countries, making it one of the largest virus infections in history.",
            KILO);
    }
}

class virus6 extends virus {
    constructor() {
        super(5,
            "Mydoom",
            "Beginning on January 26th 2004, Mydoom became the quickest-spreading email worm ever, surpassing ILOVEYOU and has since never been topped. At one point in time, Mydoom was so contagious that one in every 12 email messages carried the virus. Many victims were using search engines to find information or a solution, to the point that the search engine services were slowed down and even crashed as millions scrambled to remove the program. Mydoom functioned as a backdoor trojan, allowing the hacker behind it to access infected systems and introduce other malicious software.",
            KILO);
    }
}


class virus7 extends virus {
    constructor() {
        super(6,
            "Shamoon",
            "Discovered in 2012, Shamoon became known, years later, as the ‘biggest hack in history’. The malware particularly targeted the oil and energy sector, and struck over 30,000 computers in Saudi Arabia. Essentially, Shamoon would completely destroy the infected device, however it worked in various stages: Once infected, the virus compiles a list of files on the victim’s computer; the information is sent to the hacker; some or all of the affected files are erased by a function called ‘wiper’; finally, the virus overwrites the master boot record, meaning the computer can no longer be rebooted and is therefore unusable. Shamoon hit the Saudi Government and began when a Saudi Aramco employee opened an infected email which granted the virus access to their computer network.",
            KILO);
    }
}