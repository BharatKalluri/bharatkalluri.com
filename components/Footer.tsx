import React from "react";
import { Flex, IconButton, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaMailBulk, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import NowPlaying from "./NowPlaying";


// TODO: Move to constants
const TWITTER_URL = "https://twitter.com/bharatkalluri";
const GITHUB_URL = "https://github.com/bharatkalluri";
const LINKEDIN_URL = "https://linkedin.com/bharatkalluri";
const TELEGRAM_URL = "https://t.me/bharatkalluri";
const EMAIL = "bharatkalluri@pm.me";


const Footer = () => (
    <Flex align="center" py={8} direction="column">
        <NowPlaying />
        <div>
            <Link href={TWITTER_URL} title="Twitter" isExternal>
                <IconButton
                    aria-label="Twitter"
                    icon={<FaTwitter />}
                    size="lg"
                    color="gray.500"
                    variant="ghost"
                />
            </Link>
            <Link href={GITHUB_URL} title="GitHub" isExternal>
                <IconButton
                    aria-label="GitHub"
                    icon={<FaGithub />}
                    size="lg"
                    color="gray.500"
                    variant="ghost"
                />
            </Link>
            <Link
                href={LINKEDIN_URL}
                title="LinkedIn"
                isExternal
            >
                <IconButton
                    aria-label="LinkedIn"
                    icon={<FaLinkedin />}
                    size="lg"
                    color="gray.500"
                    variant="ghost"
                />
            </Link>
            <Link
                href={TELEGRAM_URL}
                title="Telegram"
                isExternal
            >
                <IconButton
                    aria-label="Telegram"
                    icon={<FaTelegramPlane />}
                    size="lg"
                    color="gray.500"
                    variant="ghost"
                />
            </Link>
            <Link href={`mailto:${EMAIL}`} title="Email" isExternal>
                <IconButton
                    aria-label="Email"
                    icon={<FaMailBulk />}
                    size="lg"
                    color="gray.500"
                    variant="ghost"
                />
            </Link>
        </div>
    </Flex>
);

export default Footer;