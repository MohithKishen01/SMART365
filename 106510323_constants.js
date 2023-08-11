/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team(s) H/A Goal %</font></H5>    
*/

var kImagePath = "../../../resource/images/default/info/";

/* Coloumn Constants */
var kColumnCount_TL	= 3;

/* Element Ids */
var kE_ChkElement_TL	= "chkteams_";

/* Report Type Constants */
var kRT_Offense	= 1;
var kRT_Defense	= 2;

/* Team Type Constants */
var kTT_Home	= 1;
var kTT_Away	= 2;

/* Task Ids */
var kInitData	= "10651032301";
var kSeasons	= "10651032304";
var kTeams		= "10651032305";
var kTeamOD		= "10651032306";

/* Server Row Names */
var kSR_Leagues		= "sr1";
var kSR_Seasons		= "sr2";
var kSR_Teams		= "sr3";
var kSR_ListHO		= "sr4";
var kSR_ListAO		= "sr5";
var kSR_ListHD		= "sr6";
var kSR_ListAD		= "sr7";
var kSR_LeagueTable	= "sr8";

/* Client Row Names */
var kCR_LeagueId	= "cr1";
var kCR_SeasonId	= "cr2";
var kCR_League_FLTR	= "cr3";
var kCR_TeamOD_FLTR	= "cr4";

/* Function Ids */
var kFN_View    = 1;

/* Seasons List Index */
var iS_SeasonId		= 0;
var iS_SeasonName	= 1;
var iS_StartDate	= 2;
var iS_EndDate		= 3;
var iS_OrderDate	= 4;

/* Teams Header Constants */
var iH_Teams_TL		= 0;
var iH_SelectAll_TL = 1;
var iH_ClearAll_TL  = 2;

/* Teams List Index */
var iTeamId_TL		= 0;
var iTeamName_TL	= 1;
	
/* Message Constants */
var iM_League		= 0;
var iM_Season		= 1;
var iM_DateRange	= 2;

/* Status Ids */
var T1_FunctionPM	= 101;
var T1_Leagues		= 102;

var T4_Seasons		= 401;
var T5_Teams		= 501;

var T6_TeamOD		= 601;
var T6_LeagueTable	= 602;

/* Status Messages */
var iM1_FunctionPM  = 0;
var iM1_Leagues		= 1;

var iM4_Seasons		= 0;
var iM5_Teams		= 0;

var iM6_TeamOD		= 0;
var iM6_LeagueTable	= 1;