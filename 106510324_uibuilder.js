/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team Statistics</font></H5>    
*/

function showTeamStatsData_106510324 (xmlDoc)
{        
    showTeamStats_106510324 (xmlDoc);
    showLeagueTable_106510324 (xmlDoc);
}

function showTeamStats_106510324 (xmlDoc)
{        
    var oHeaderLeft = "";
    var oHeaderRight = UDModule.COMP.getSelectedText (UDModule.COMP.getElement ("cbLeagues")) + 
        " [" + UDModule.COMP.getSelectedText (UDModule.COMP.getElement ("cbSeasons")) + "]";
        
    var nSplitRow = 0;
    
    var nodeList = xmlDoc.getElementsByTagName (kSR_TeamStats);
    var arrNodes = UDModule.DOM.convertNodesToArray (nodeList);

    var objStats = new TeamStatsObj_EG ();
    objStats.ArrNodes = arrNodes;
    objStats.SportId = UDModule.SPORT.kS_Soccer;
    objStats.ReportTypeId = objStats.kRT_TeamInSeason;
    objStats.SplitRowBy = nSplitRow;
    objStats.CurrentTeamId = getTeamId_106510324 (); 
    objStats.HeaderLeft = oHeaderLeft;
    objStats.HeaderRight = oHeaderRight;
    UDModule.COMP.replaceDynamicHtml ("tdTeamStats", objStats.buildTeamStatsUI (objStats));
}

function showLeagueTable_106510324 (xmlDoc)
{
    var nWidth = 0, nLastMatches = 0;
    var oLeagueName = UDModule.COMP.getSelectedText (UDModule.COMP.getElement ("cbLeagues"));
    var oSeasonName = UDModule.COMP.getSelectedText (UDModule.COMP.getElement ("cbSeasons"));
    
    var nodeList = xmlDoc.getElementsByTagName (kSR_LeagueTable);
    var arrNodes = UDModule.DOM.convertNodesToArray (nodeList);

    var objLeagueTable = new LeagueTableObj_DA ();
    objLeagueTable.ArrNodes = arrNodes;
	objLeagueTable.SportId = UDModule.SPORT.kS_Soccer;
	objLeagueTable.ExtraColWidth = nWidth;
	objLeagueTable.LeagueName = oLeagueName;	
	objLeagueTable.SeasonName = oSeasonName;
	objLeagueTable.ATeamId = getTeamId_106510324 ();
	objLeagueTable.MatchCount = nLastMatches;
    UDModule.COMP.replaceDynamicHtml ("tdNormalTable", objLeagueTable.buildLeagueTableUI (objLeagueTable));
}