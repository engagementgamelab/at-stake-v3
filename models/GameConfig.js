/**
 * @Stake v3
 * 
 * GameConfig Model
 * @module models
 * @class GameConfig
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * GameConfig Model
 * ==========
 */

var GameConfig = new keystone.List('GameConfig', {
		label: 'Games Config',
		nodelete: true,
		nocreate: true
});

GameConfig.add(
		{
			name: { type: String, required: true, default: "Game Settings" },
				  
		  playerCountRangeMin: { type: Number, label: "Player Allowed Count Min", required: true, initial: true },
		  playerCountRangeMax: { type: Number, label: "Player Allowed Count Max", required: true, initial: true },
		  timeTimeoutPlayer: { type: Number, label: "Player Disconnect Timeout", note: "Time (seconds) before game ends after player disconnects", required: true, initial: true }
		},

	  /*
		* Time settings
		*/
		'Time settings', {
		  thinkSeconds: { type: Number, label: "Meet Seconds", note: 'Amount of time in the "think" segment of the round', required: true, initial: true },
		  pitchSeconds: { type: Number, label: "Pitch Seconds", note: 'Amount of time in the "pitch" segment of the round', required: true, initial: true },
		  // extraSeconds: { type: Number, label: "Extra Seconds", note: 'Amount of time given to a player if they choose to use additional time for their pitch', required: true, initial: true },
		  // doubledownSeconds: { type: Number, label: "Double-down Seconds", note: 'Amount of time given to a player if they buy Double-down time', required: true, initial: true },
		  deliberateSeconds: { type: Number, label: "Deliberate Seconds", note: 'Amount of time in the "deliberate" segment of the round', required: true, initial: true }
		}, 

		/*
		* Animation settings
		*/
		'Animation settings', {
		  decideDuration: { type: Number, label: "Think Seconds", note: 'Duration of proposal and agenda decide modals', required: true, initial: true },
		  winnerDuration: { type: Number, label: "Game Winner Modal Seconds", note: 'Duration of game winner modals', required: true, initial: true }
		}, 

		/*
		* Debrief settings
		*/
		'Debrief', {
		  debriefQuestions: { type: Types.TextArray, label: "Debrief Questions", note: "Needs 4 questions." }
		}

);

/**
 * Registration
 */

GameConfig.defaultColumns = 'name';
GameConfig.register();
