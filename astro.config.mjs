// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://parrotpalswiki.vercel.app',
	integrations: [
		starlight({
			title: 'Parrot Pals Wiki',
			description: 'The official community wiki for the Parrot Pals Minecraft server.',
			favicon: '/favicon.svg',
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/parrotpals' },
				{ icon: 'tiktok', label: 'TikTok', href: 'https://tiktok.com/@captionthism8' },
				{ icon: 'twitch', label: 'Twitch', href: 'https://twitch.tv/captionthism8' },
				{ icon: 'youtube', label: 'YouTube', href: 'https://youtube.com/@CaptionThisM8' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Getting Started', slug: 'getting-started' },
						{ label: 'Commands Reference', slug: 'commands' },
						{ label: 'Server Info', slug: 'server-info' },
					],
				},
				{
					label: 'Prison',
					items: [
						{ label: 'Prison Overview', slug: 'prison/overview' },
						{ label: 'Ranks', slug: 'prison/ranks' },
						{ label: 'Mines', slug: 'prison/mines' },
						{ label: 'Custom Pickaxes', slug: 'prison/pickaxes' },
						{ label: 'Prestige', slug: 'prison/prestige' },
						{ label: 'Sell Prices', slug: 'prison/sell-prices' },
						{ label: 'Prison Crates', slug: 'prison/prison-crates' },
						{ label: 'Bosses', slug: 'prison/bosses' },
						{ label: 'Daily Rewards', slug: 'prison/daily-rewards' },
					],
				},
				{
					label: 'Economy',
					items: [
						{ label: 'Economy Overview', slug: 'economy/overview' },
						{ label: 'Money Sources', slug: 'economy/money-sources' },
						{ label: 'Mob Kill Rewards', slug: 'economy/mob-rewards' },
						{ label: 'Spawner Shop', slug: 'economy/spawner-shop' },
					{ label: 'Jobs', slug: 'economy/jobs' },
					{ label: 'Server Shop', slug: 'economy/server-shop' },
					{ label: 'AFK Zone', slug: 'economy/afk-zone' },
					{ label: 'Bank & Profiles', slug: 'economy/bank-and-profiles' },
						{ label: 'Quest Shop', slug: 'economy/quest-shop' },
					],
				},
				{
					label: 'Crates',
					items: [
						{ label: 'Crates Overview', slug: 'crates/overview' },
						{ label: 'End Crate', slug: 'crates/end-crate' },
						{ label: 'Vote Crate', slug: 'crates/vote-crate' },
						{ label: 'Animal Crate', slug: 'crates/animal-crate' },
						{ label: 'Hostile Mob Crate', slug: 'crates/hostile-mob-crate' },
						{ label: 'Nametag Crate', slug: 'crates/nametag-crate' },
						{ label: 'Pet Crate', slug: 'crates/pets-crate' },
					],
				},
				{
					label: 'Progression',
					items: [
						{ label: 'Pets', slug: 'progression/pets' },
						{ label: 'Prefixes', slug: 'progression/prefixes' },
					],
				},
				{
					label: 'Teams & Land',
					items: [
						{ label: 'Teams', slug: 'teams/teams' },
						{ label: 'Land Claiming', slug: 'teams/land-claim' },
						{ label: 'PvP', slug: 'teams/pvp' },
					],
				},
				{
					label: 'Community',
					items: [
						{ label: 'Daily Quests', slug: 'community/daily-quests' },
						{ label: 'Chat Games', slug: 'community/chat-games' },
						{ label: 'The Streamer', slug: 'community/streamer' },
					],
				},
			],
		}),
	],
});
