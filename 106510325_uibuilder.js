/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team Statistics Ex</font></H5>    
*/

function showTeamStatsData_106510325 (xmlDoc)
{        
    showTeamResultStats_106510325 (xmlDoc);
    showLeagueResultStats_106510325 (xmlDoc);
    showLeagueTable_106510325 (xmlDoc);
}

function showTeamResultStats_106510325 (xmlDoc)
{
    var oHeader = UDModule.COMP.getSelectedText (UDModule.COMP.getElement ("cbTeams"));
    
    var nodeList = xmlDoc.getElementsByTagName (kSR_Team_RS);
    var arrNodes = UDModule.DOM.convertNodesToArray (nodeList);

    var objStats = new HdpResultStatsObj_EE ();
    objStats.ArrNodes = arrNodes;
    objStats.SportId = UDModule.SPORT.kS_Soccer;
    objStats.CurrentTeamId = getTeamId_106510325 ();
    objStats.HeaderName = oHeader;
    UDModule.COMP.replaceDynamicHtml ("tdLast5YearTeam", objStats.buildHdpResultStatsUI (objStats));
    UDModule.COMP.replaceDynamicHtml ("tdTeam_RSSummary", objStats.buildSummaryTable (objStats));
}

function showLeagueResultStats_106510325 (xmlDoc)
{
    var oHeader = UDModule.COMP.getSelectedText (UDModule.COMP.getElement ("cbLeagues"));
    
    var nTeamId = 0;
    var nodeList = xmlDoc.getElementsByTagName (kSR_League_RS);
    var arrNodes = UDModule.DOM.convertNodesToArray (nodeList);

    var objStats = new HdpResultStatsObj_EE ();
    objStats.ArrNodes = arrNodes;
    objStats.SportId = UDModule.SPORT.kS_Soccer;
    objStats.CurrentTeamId = nTeamId;
    objStats.HeaderName = oHeader;
    UDModule.COMP.replaceDynamicHtml ("tdLast5YearLeague", objStats.buildHdpResultStatsUI (objStats));
    UDModule.COMP.replaceDynamicHtml ("tdLeague_RSSummary", objStats.buildSummaryTable (objStats));
}

function showLeagueTable_106510325 (xmlDoc)
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
	objLeagueTable.ATeamId = getTeamId_106510325 ();
	objLeagueTable.MatchCount = nLastMatches;
    UDModule.COMP.replaceDynamicHtml ("tdNormalTable", objLeagueTable.buildLeagueTableUI (objLeagueTable));
}