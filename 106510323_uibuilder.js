/**
    @fileoverview <H5><font color="#8A8A8A">module:</font><font color="#AA6600">Team(s) H/A Goal %</font></H5>    
*/

function showTeamODUI_106510323 ()
{	
	UDModule.COMP.setDisplay ("trTeamOD", "none");
	UDModule.COMP.replaceDynamicHtml ("tdView_HO", "");
	UDModule.COMP.replaceDynamicHtml ("tdView_AO", "");
	UDModule.COMP.replaceDynamicHtml ("tdView_HD", "");
	UDModule.COMP.replaceDynamicHtml ("tdView_AD", "");   	

    var xmlDoc = UDModule.PROJ.processRequest (getTeamHAGoalPercentParam_106510323 ());
    if (UDModule.PROJ.isValidStatus (xmlDoc))    
    {
        if (isValidStatus_T6_106510323 (xmlDoc))
			buildTeamODUI_106510323 (xmlDoc);
    }
}

function buildTeamODUI_106510323 (xmlDoc)
{	
	UDModule.COMP.setDisplay ("trTeamOD", "block");

	var nSportId = UDModule.SPORT.kS_Soccer;
		
	var nodeList_LT = xmlDoc.getElementsByTagName (kSR_LeagueTable);
    var arrNodes_LT = UDModule.DOM.convertNodesToArray (nodeList_LT);

	var objLeagueTable = new LeagueTableObj_DA ();
    objLeagueTable.ArrNodes = arrNodes_LT;
	var nTeamCount = arrNodes_LT.length;

    var nodeList_HO = xmlDoc.getElementsByTagName (kSR_ListHO);
    var arrNodes_HO = UDModule.DOM.convertNodesToArray (nodeList_HO);

	var nodeList_AO = xmlDoc.getElementsByTagName (kSR_ListAO);
    var arrNodes_AO = UDModule.DOM.convertNodesToArray (nodeList_AO);
    	
	var nodeList_HD = xmlDoc.getElementsByTagName (kSR_ListHD);
    var arrNodes_HD = UDModule.DOM.convertNodesToArray (nodeList_HD);

	var nodeList_AD = xmlDoc.getElementsByTagName (kSR_ListAD);
    var arrNodes_AD = UDModule.DOM.convertNodesToArray (nodeList_AD);

    var objTeamOD = new TeamODObj_DI ();
    objTeamOD.ArrNodes = arrNodes_HO;
	objTeamOD.SportId = nSportId;
	objTeamOD.LeagueTableObj = objLeagueTable;
	objTeamOD.ReportTypeId = objTeamOD.kRT_Offense;
	objTeamOD.TeamTypeId = objTeamOD.kTT_Home;
	objTeamOD.TeamCount = nTeamCount;
	UDModule.COMP.replaceDynamicHtml ("tdView_HO", objTeamOD.buildTeamODUI (objTeamOD));

    var objTeamOD = new TeamODObj_DI ();
    objTeamOD.ArrNodes = arrNodes_AO;
	objTeamOD.SportId = nSportId;
	objTeamOD.LeagueTableObj = objLeagueTable;
	objTeamOD.ReportTypeId = objTeamOD.kRT_Offense;
	objTeamOD.TeamTypeId = objTeamOD.kTT_Away;
	objTeamOD.TeamCount = nTeamCount;
	UDModule.COMP.replaceDynamicHtml ("tdView_AO", objTeamOD.buildTeamODUI (objTeamOD));
    	
    var objTeamOD = new TeamODObj_DI ();
    objTeamOD.ArrNodes = arrNodes_HD;
	objTeamOD.SportId = nSportId;
	objTeamOD.LeagueTableObj = objLeagueTable;
	objTeamOD.ReportTypeId = objTeamOD.kRT_Defense;
	objTeamOD.TeamTypeId = objTeamOD.kTT_Home;
	objTeamOD.TeamCount = nTeamCount;	
	UDModule.COMP.replaceDynamicHtml ("tdView_HD", objTeamOD.buildTeamODUI (objTeamOD));

    var objTeamOD = new TeamODObj_DI ();
    objTeamOD.ArrNodes = arrNodes_AD;
	objTeamOD.SportId = nSportId;
	objTeamOD.LeagueTableObj = objLeagueTable;
	objTeamOD.ReportTypeId = objTeamOD.kRT_Defense;
	objTeamOD.TeamTypeId = objTeamOD.kTT_Away;
	objTeamOD.TeamCount = nTeamCount;
	UDModule.COMP.replaceDynamicHtml ("tdView_AD", objTeamOD.buildTeamODUI (objTeamOD));
}